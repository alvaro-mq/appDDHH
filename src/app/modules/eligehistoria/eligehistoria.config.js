(function() {
  'use strict';

  angular
      .module('appDdhh')
      .config(config);


  function config($stateProvider,$translatePartialLoaderProvider) {
  /*  $stateProvider
        .state('appDdhh.eligehistoria', {
            url   : '/elige-historia',
            views : {
              'content@app': {
                templateUrl : 'app/eligehistoria/elige-historia.html',
                controller  : 'EligeHistoriaController',
                controllerAs: 'vm'
              }
            },
            displayName: 'GENERAL.TITULO',
            title:'Hola'
        });*/


    $translatePartialLoaderProvider.addPart('app/main');
  }
})();
