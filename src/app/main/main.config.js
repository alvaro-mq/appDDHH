(function() {
  'use strict';

  angular
      .module('appDdhh')
      .config(config);

  /* @ngInject */

  function config($stateProvider,$translatePartialLoaderProvider) {
    $stateProvider
        .state('appDdhh.inicio', {
            url   : '/inicio',
            views : {
              'content@app': {
                templateUrl : 'app/main/main.html',
                controller  : 'MainController',
                controllerAs: 'vm'
              }
            },
            displayName: 'GENERAL.TITULO',
            title:'Hola'
        });


    $translatePartialLoaderProvider.addPart('app/main');
  }
})();
