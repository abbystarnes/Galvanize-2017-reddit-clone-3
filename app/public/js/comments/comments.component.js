
(function() {
  'use strict'

  angular.module('app')

    .component('comments', {
        controller: controller,
        templateUrl: '../js/comments/comments.template.html',
        bindings: {
          post: '<',
        }
    })

    controller.$inject = ['$http', 'commentService', '$scope']

    function controller($http, commentService, $scope){
      const vm = this;
      vm.comments = commentService.comments;

      $scope.init = function(id){
        commentService.getComments(id);
      }

      vm.updateComments = function(id, newComment){
        commentService.addComment(id, newComment);
        commentService.getComments(id);
      }

    }


}());
