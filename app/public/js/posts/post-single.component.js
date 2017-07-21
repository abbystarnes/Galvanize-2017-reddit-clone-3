(function() {
  'use strict'

  angular.module('app')
      // posts component
      // comments component
        // ^^ talk to eachother via service
    .component('postSingle', {
      controller: controller,
      templateUrl: '../js/posts/post-single.template.html',
      bindings: {
        post: '<'
      },
    })

    controller.$inject = ['$http', 'postService', '$state']
    function controller($http, postService, $scope, $state){
      const vm = this;

      vm.updateVotes = function(post, direction){
        postService.updateVotes(post, direction);
      }


      vm.toggleComments = function(itemPos) {
         if (vm.currentPostIndex === itemPos) {
             vm.currentPostIndex = undefined;
         }
         else {
             vm.currentPostIndex = itemPos;
         }
      }

      // $scope.toggleComments = function(itemPos) {
      //    if ($scope.currentPostIndex === itemPos) {
      //        $scope.currentPostIndex = undefined;
      //    }
      //    else {
      //        $scope.currentPostIndex = itemPos;
      //    }
      // }
  // <a ng-click="toggleComments($index)">
      // ng-if="currentPostIndex === $index"

      vm.isOpen = function(post) {
        let index = vm.posts.indexOf(post);
      }

    }

}());
