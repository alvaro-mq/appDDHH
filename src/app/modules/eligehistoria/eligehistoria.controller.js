(function() {
  'use strict';

  angular
    .module('appDdhh')
    .controller('EligeHistoriaController', EligeHistoriaController);

  EligeHistoriaController.$inject = ['$timeout','webDevTec','$filter','$location','$cookies'];
  /** @ngInject */
  function EligeHistoriaController($timeout, webDevTec, $filter,$location,$cookies) {
    var vm = this;
    vm.datos = {};
    vm.datos.historia = {};
    vm.historias = [{
                     id:1,
                      nombre:'historia1',
                      descripcion:'xxxxxx'
                    },
                    {
                      id:2,
                      nombre:'historia2',
                      descripcion:'yyyyyy'
                    },
                    {
                      id:3,
                      nombre:'historia3',
                      descripcion:'zzzzz'
                    }];
    
    vm.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    vm.series = ['Series A', 'Series B'];

  vm.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];




    activate();

    function activate() {
    
    }
    var $translate = $filter('translate');
    var hola = $translate('BOTONES.SIGUIENTE');
    vm.IntroOptions = {
        steps:[
        {
            element: document.querySelector('#step1'),
            intro: "Elige la Historia."
        },
        {
            element: document.querySelectorAll('#step2')[0],
            intro: "<strong>Elige tu personaje favorito</strong> ",
            position: 'right'
        },
        {
            element: '#step3',
            intro: 'Elige un Nick.',
            position: 'right'
        },
        {
            element: '#step4',
            intro: "Empezar el juego.",
            position: 'bottom'
        }
        ],
        showStepNumbers: true,
        exitOnOverlayClick: true,
        exitOnEsc:true,
        nextLabel: '<span style="color:#cfff22"><strong>SIGUIENTE PASO!</strong></span>',
        prevLabel: '<span style="color:green" translate="BOTONES.ANTERIOR">ANTERIOR PASO</span>',
        skipLabel: 'SALIR',
        doneLabel: 'Gracias'
    };
    vm.empezar = empezar;
    function empezar(){
      $cookies.put('nick', 'alvaro');
      $location.path('/historia');
    }



  }
})();
