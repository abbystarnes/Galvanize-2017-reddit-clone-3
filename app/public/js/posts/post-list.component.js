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
      vm.isNewPostFormOpen = true
      vm.posts = postService.getPosts();
    }

}());
