(function() {
  'use strict'

  angular.module('app')
    .component('postForm', {
      controller: controller,
      templateUrl: '../js/posts/post-form.template.html',
      bindings: {
        post: '<'
      },
    })

    controller.$inject = ['$http', 'postService', '$state', '$scope']
    function controller($http, postService, $scope){
      const vm = this;
      vm.button ='Create Post';

      vm.$onInit = function(){
        if(vm.post){
          if (vm.post.id){
            vm.button = 'Update Post';
          }
        }
      }

      vm.isDisabled = function(){
        let className
        if (vm.newPostForm.$invalid) {
          className = 'disabled'
        }
        return className;
      }


      vm.isValid = function(inputName) {
        vm.className = '';
        if (vm.newPostForm[inputName].$touched && vm.newPostForm[inputName].$invalid){
            vm.className = 'has-error';
        }
        return vm.className;
      };


      vm.createNewPost = function () {
        if(vm.post.id){
          postService.editPost(vm.post.id, vm.post)
        } else {
          console.log('new post');
          postService.createNewPost(vm.post);
        }
        delete vm.post;
        vm.newPostForm.$setUntouched();
    }
  }
}());
