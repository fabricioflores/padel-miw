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
        controller: 'AboutCtrl',
        controllerAs: 'about',
        templateUrl: 'views/about.html'
      })
      .state('installations', {
        url: '/installations',
        controller: 'AboutCtrl',
        controllerAs: 'about',
        templateUrl: 'views/about.html'
      })
      .state('reserve', {
        url: '/reserve',
        controller: 'AboutCtrl',
        controllerAs: 'about',
        templateUrl: 'views/about.html'
      })
      .state('register', {
        url: '/register',
        controller: 'AboutCtrl',
        controllerAs: 'about',
        templateUrl: 'views/about.html'
      })
      .state('login', {
        url: '/reserve',
        controller: 'AboutCtrl',
        controllerAs: 'about',
        templateUrl: 'views/about.html'
      });

      $urlRouterProvider.otherwise(function() {
        return '/';
      });
  });
