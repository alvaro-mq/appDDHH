(function() {
  'use strict';

  angular
  .module('appDdhh')
  .component('mdCabecera', {
    templateUrl: 'app/components/cabecera/cabecera.html',
    controller: CabeceraController,
    bindings: {
      viewTitle: '@?',
      filter: '=?',
      modelFilter: '=?',
      add: '=?',
      addTitle: '@?',
      eventAdd: '&?',
      actionAdd: '=?',
      disabled:'=?'
    }
  });

  function CabeceraController($attrs, $state, _, $translate) {
    var vm = this;
    vm.isOpen = false;
    vm.title = _.isUndefined(vm.viewTitle)? $state.$current['title'] : vm.viewTitle;
    vm.cambiarIdioma = cambiarIdioma;
    /**
     * cambiarIdioma - Metodo para setear al idioma elegido
     * @param {string} codigoIdioma - codigo de Idioma elegido
     */
    function cambiarIdioma(codigoIdioma){
         $translate.use(codigoIdioma); 
    }
  }

})();
