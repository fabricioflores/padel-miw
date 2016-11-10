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
        controller: 'MainCtrl',
        controllerAs: 'main',
        templateUrl: 'views/main.html'
      })
      .state('about', {
        url: '/about',
        controller: 'AboutCtrl',
        controllerAs: 'about',
        templateUrl: 'views/about.html'
      });

      $urlRouterProvider.otherwise(function() {
        return '/';
      });
  });
