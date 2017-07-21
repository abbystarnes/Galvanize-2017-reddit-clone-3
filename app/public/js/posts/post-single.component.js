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

// if post index is the clicked index, toggle it
// else, close the post
      vm.currentPostIndex = undefined;
// if click index matches post index, then toggle it, close the rest
      vm.toggleComments = function(itemPos) {
        console.log('clicked');
        console.log(itemPos, 'index');
         if (vm.currentPostIndex === itemPos) {
             vm.currentPostIndex = undefined;
            //  console.log(vm.currentPostIndex);
            //  console.log(itemPos);
         }
         else {
             vm.currentPostIndex = itemPos;
            //  console.log(vm.currentPostIndex);
            //  console.log(itemPos);
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
