(function() {
  'use strict';

  angular
    .module('app')
    .service('postService', postService)

    postService.$inject = ['$http', '$state'];
    function postService($http, $state) {
      const vm = this;
      vm.posts = [];

      vm.getPosts = function() {
        $http.get('/api/posts').then(function (response) {
          for (let i = 0; i < response.data.length; i ++){
            vm.posts[i] = response.data[i];
          }
        })
        return vm.posts;
      }

      vm.createNewPost = function(newPost){
        $http.post('/api/posts', newPost).then(function (response){
          vm.getPosts();
        });

      }

      // edit post
      vm.editPost = function(updatedPostId, updatedPost){
        $http.patch(`/api/posts/${updatedPostId}`, updatedPost).then(function (response){
          vm.getPosts();
          $state.go('posts');
        })
      }


      vm.updateVotes = function(post, direction){
        vm.id = post.id;
        if (direction === 'positive'){
            $http.post(`/api/posts/${vm.id}/votes`).then(function (response){
            }).then(function (response){
              vm.getPosts();
            });
        } else {
            if(post.vote_count > 0){
              $http.delete(`/api/posts/${vm.id}/votes`).then(function (response){
              }).then(function (response){
                vm.getPosts();
              });
            }
        }

      }

    }


}());
