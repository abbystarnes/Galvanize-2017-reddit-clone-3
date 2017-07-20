(function() {
  'use strict';

  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider){

    // this line is optional
    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'app',
        abstract: true,
        component: 'app',
      })
      .state({
        name: 'posts',
        parent: 'app',
        url: '/',
        component: 'postList',
      })
      .state({
        name: 'editPost',
        parent: 'app',
        url: '/post/:id/edit',
        component: 'postEdit',
        params: {
          post: 'defaultValue',  
        },
      })
      // .state({
      //   name: 'postForm',
      //   parent: 'posts',
      //   component: 'postForm',
      // })

}



}());
