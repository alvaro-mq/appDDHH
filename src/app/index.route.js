(function() {
  'use strict';

  angular
    .module('appDdhh')
    .config(routeConfig);

  function routeConfig($routeProvider) {
/*      $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('eligehistoria', {
            url   : '/elige-historia',
                templateUrl : 'app/eligehistoria/elige-historia.html',
                controller  : 'EligeHistoriaController',
                controllerAs: 'vm'
      })
      .state('historia', {
        url: '/historia',
        templateUrl: 'app/historia/historia.html',
        controller: 'HistoriaController',
        controllerAs: 'vm'
      });
      $urlRouterProvider.otherwise('/');
   */
    $routeProvider
      .when('/', {
        templateUrl: 'app/modules/eligehistoria/elige-historia.html',
        controller: 'EligeHistoriaController',
        controllerAs: 'vm'
      }).
      when('/historia', {
        templateUrl: 'app/modules/historia/historia.html',
        controller: 'HistoriaController',
        controllerAs: 'vm'
      })
      .when('resultados', {
          url: '/resultados',
          templateUrl: 'app/resultados/resultados/resultados.resultados.html',
          controller: 'ResultadosController',
          controllerAs: 'resultados'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
