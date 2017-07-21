(function() {
  'use strict'

  angular.module('app')
      // posts component
      // comments component
        // ^^ talk to eachother via service
    .component('postList', {
      controller: controller,
      templateUrl: '../js/posts/post-list.template.html'
    })

    controller.$inject = ['$http', 'postService', '$state', '$scope']
    function controller($http, postService, $scope, $state){
      const vm = this;
      vm.formOpen = false;
      vm.toggleForm = function(){
        console.log('toggled form');
        console.log(vm.formOpen);
          if (vm.formOpen === true){
            vm.formOpen = false;
            console.log(vm.formOpen);
          } else {
            vm.formOpen = true;
            console.log(vm.formOpen);
          }
      }
      vm.posts = postService.getPosts();

    }

}());
