'use strict';

/**
 * @ngdoc function
 * @name generatorAngularComposerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the generatorAngularComposerApp
 */
angular.module('generatorAngularComposerApp')
  .controller('MainCtrl', function ($scope, $http) {
    function createUnknownError(status) {
      return {
        status: status,
        statusText: 'Internal Server Error',
        description: 'No details available'
      };
    }

    $scope.awesomeThings = [];
    $scope.loading = true;
    $scope.dailyMailGettyImagesList = 'testing';

    // Get awesome things list
    $http({method: 'GET', url: '/api/features'}).
    success(function (data) {
      $scope.loading = false;
      $scope.dailyMailGettyImagesList = data;

      $scope.getImage = $scope.dailyMailGettyImagesList.images[0].id;
      


      // $http({method: 'GET', url: '/api/features/id='+$scope.getImage}).
      // success(function (data) {
      //   $scope.dailyMailHaveImage = data;
      // }).
      // error(function (data, status) {
      //   $scope.dailyMailGettyImagesList = 'error';
      // });


      // $http({method: 'GET', url: 'https://api.gettyimages.com:443/v3/images?ids='+$scope.getImage}).
      // success(function (data) {
      //   $scope.dailyMailHaveImage = data;
      // }).
      // error(function (data, status) {
      //   $scope.dailyMailGettyImagesList = 'error';
      // });


      // var request = new XMLHttpRequest();
      // request.open('GET', 'https://api.gettyimages.com:443/v3/images?ids='+$scope.getImage, true);

      // request.onload = function() {
      //   if (request.status >= 200 && request.status < 400) {
      //     //success
      //     var data = JSON.parse(request.responseText);
      //   } else {
      //     // we reached our target server but it returned an error
      //   }
      // };
      // request.onerror = function(argument) {
      //   // there was a connection error of some sort
      // };
      // request.send();
      // getImages();
    }).
    error(function (data, status) {
      $scope.dailyMailGettyImagesList = 'error';
    });
    // function getImages() {
    //   $http({method: 'GET', url: '/api/features/id='+$scope.getImage}).
    //   success(function (data) {
    //     $scope.dailyMailHaveImage = data;
    //   }).
    //   error(function (data, status) {
    //     // $scope.dailyMailGettyImagesList = 'error';
    //   });    
    // }
  });






















