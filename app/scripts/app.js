'use strict';

angular
  .module('padelApp', [
    'padelApp.services',
    'padelApp.controllers',
    'padelApp.directives',
    'ui.router',
    'ngMessages',
    'angularjs-datetime-picker',
    'Alertify',
    'ngStorage',
    'validation.match',
    'vcRecaptcha'
  ]);

angular.module('padelApp.services', []);
angular.module('padelApp.controllers', []);
angular.module('padelApp.directives', []);
