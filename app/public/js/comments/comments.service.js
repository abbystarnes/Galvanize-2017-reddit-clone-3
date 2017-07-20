(function() {
  'use strict';

  angular
    .module('app')
    .service('commentService', commentService)

    commentService.$inject = ['$http'];
    function commentService($http) {
      const vm = this;
      vm.comments = {};

      vm.getComments = function(postId) {
          $http.get(`/api/posts/${postId}/comments`).then(function (response) {
            vm.comments[postId] = [];
            for (let x = 0; x < response.data.length; x++){
              vm.comments[postId].push(response.data[x].content);
            }
          })
      }

      vm.addComment = function(id, comment){
        vm.commentObject = {
          created_at: new Date(),
          post_id: id,
          content: comment
        };
        $http.post(`/api/posts/${id}/comments`, vm.commentObject).then(function (response){
          vm.getComments(id);
        });
      }

    }


}());
