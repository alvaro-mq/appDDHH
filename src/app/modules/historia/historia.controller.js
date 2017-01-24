(function() {
  'use strict';

  angular
    .module('appDdhh')
    .controller('HistoriaController', HistoriaController);

  HistoriaController.$inject = ['$timeout'];
  /** @ngInject */
  function HistoriaController($timeout) {
    var vm = this;
    vm.events = [{
    badgeClass: 'info',
    badgeIconClass: 'glyphicon-check',
    title: 'First heading',
    content: 'Some awesome content.'
  }, {
    badgeClass: 'info',
    badgeIconClass: 'glyphicon-credit-card',
    title: 'Second heading',
    content: 'More awesome content.'
  }];
  }
})();