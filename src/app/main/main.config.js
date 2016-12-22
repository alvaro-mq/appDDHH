(function() {
  'use strict';

  angular
      .module('appDdhh')
      .config(config);

  /* @ngInject */

  function config($translatePartialLoaderProvider) {
    $translatePartialLoaderProvider.addPart('app/main');
  }
})();
