(function() {
  'use strict'

  angular.module('app')
      // posts component
      // comments component
        // ^^ talk to eachother via service
    .component('app', {
      templateUrl: '../js/app/app.template.js',
      controller: controller
    })

    controller.$inject = ['$http']
    function controller($http){
      const vm = this;
    }

  })();
