(function() {
  'use strict'

  angular.module('app')

    .component('postEdit', {
      controller: controller,
      templateUrl: '../js/posts/post-edit.template.html',
    })

    controller.$inject = ['$http', 'postService', '$scope', '$stateParams']

    function controller($http, postService, $scope, $stateParams){
      const vm = this;
      vm.post = $stateParams.post;
      // console.log('reaching edit component');
      // // vm.post = $stateParams.post;
      // console.log($stateParams.post);
      console.log(vm.post);
      // vm.posts = postService.getPosts();


      // vm.editPost = function(updatedPostId){
      //   let updatedPost = {
      //     author: vm.editPost.author,
      //     body: vm.editPost.body,
      //     created_at: new Date(),
      //     image_url: vm.editPost.image,
      //     title: vm.editPost.title
      //   }
      //   postService.editPost(updatedPostId, updatedPost)
      // }

    }

}());
