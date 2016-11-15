'use strict';

/**
 * @ngdoc overview
 * @name padelApp
 * @description
 * # padelApp
 *
 * Main module of the application.
 */
angular
  .module('padelApp', [
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html'
      })
      .state('services', {
        url: '/services',
        templateUrl: 'views/services.html'
      })
      .state('installations', {
        url: '/installations',
        templateUrl: 'views/installations.html'
      })
      .state('reserve', {
        url: '/reserve',
        controller: 'ReserveController',
        controllerAs: 'reserveVm',
        templateUrl: 'views/reserve.html'
      })
      .state('register', {
        url: '/register',
        controller: 'RegisterController',
        controllerAs: 'registerVm',
        templateUrl: 'views/register.html'
      })
      .state('login', {
        url: '/login',
        controller: 'LoginController',
        controllerAs: 'loginVm',
        templateUrl: 'views/login.html'
      });

      $urlRouterProvider.otherwise(function() {
        return '/';
      });
  });
