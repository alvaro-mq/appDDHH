(function() {
  'use strict';

  angular
    .module('appDdhh')
    .config(config);

  config.$inject = ['$logProvider', 'toastrConfig','$translateProvider','$mdThemingProvider'];
  /** @ngInject */
  function config($logProvider, toastrConfig,$translateProvider,$mdThemingProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    // angular-translate configuration
    $translateProvider.useLoader('$translatePartialLoader', {
      urlTemplate: '{part}/i18n/{lang}.json'
    });
    $translateProvider.preferredLanguage('es');
    $translateProvider.useSanitizeValueStrategy(null);


    //angular material theme configuration
     $mdThemingProvider.theme('default')
    .primaryPalette('deep-purple')
    .accentPalette('orange');

    // $mdThemingProvider.theme('default')
    // .dark();
    //  $mdThemingProvider.theme('default')
    // .primaryPalette('pink', {
    //   'default': '400', // by default use shade 400 from the pink palette for primary intentions
    //   'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
    //   'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
    //   'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
    // })
    // If you specify less than all of the keys, it will inherit from the
    // default shades
    // .accentPalette('purple', {
    //   'default': '200' // use shade 200 for default, and keep all other shades the same
    // });
  }

})();
