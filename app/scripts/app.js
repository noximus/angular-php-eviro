'use strict';

/**
 * @ngdoc overview
 * @name generatorAngularComposerApp
 * @description
 * # generatorAngularComposerApp
 *
 * Main module of the application.
 */
angular
  .module('generatorAngularComposerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/gettyimages', {
        templateUrl: 'views/gettyimages.html',
        controller: 'GettyimagesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
