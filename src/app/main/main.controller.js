(function() {
  'use strict';

  angular
    .module('appDdhh')
    .controller('MainController', MainController);

  MainController.$inject = ['$timeout','webDevTec','toastr','$translate'];
  /** @ngInject */
  function MainController($timeout, webDevTec, toastr,$translate) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1482346013491;
    vm.showToastr = showToastr;
    vm.cambiarIdioma = cambiarIdioma;
    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
    function cambiarIdioma(codigo){
      console.log(codigo);
      $translate.use(codigo);
    }

  }
})();
