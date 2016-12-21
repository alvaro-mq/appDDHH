(function() {
  'use strict';

  angular
    .module('appDdhh')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
