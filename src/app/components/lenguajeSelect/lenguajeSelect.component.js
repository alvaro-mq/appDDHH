(function() {
  'use strict';

  angular
    .module('appDdhh')
    .component('lenguajeSelect', {
      templateUrl: 'app/components/lenguajeSelect/lenguajeSelect.html',
      controller: LenguajeSelectController,
      bindings: {

      }
    });

    function LenguajeSelectController($translate) {
      var vm = this;

      vm.cambiarLenguaje = cambiarLenguaje;

      vm.lenguajes = {
            es: {
                'titulo'      : 'Espanol',
                'codigo'      : 'es'
            },
            ay: {
                'titulo'      : 'Aymara',
                'codigo'      : 'ay'
            },
            qu: {
                'titulo'      : 'Quechua',
                'codigo'      : 'qu'
            }
        };

      function cambiarLenguaje(lang) {
        vm.lenguajeSeleccionado = lang;
        $translate.use(lang.codigo);
      }

      activate();

      function activate() {
        vm.lenguajeSeleccionado = vm.lenguajes[$translate.preferredLanguage()];
      }
    }
})();
