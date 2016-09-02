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
    $scope.noximus = "testing";
    

    // Get awesome things list
    $http({method: 'GET', url: '/api/features'}).
      success(function (data) {
    //     $scope.loading = false;
    //     $scope.awesomeThings = data;

    //     // Get description of each thing
    //     //for (var thing in $scope.awesomeThings) {
    //     // $scope.awesomeThings.forEach(function (thing) {
    //       // $scope.awesomeThings.loading = true;

    //       // $http({method: 'GET', url: $scope.awesomeThings.href}).
    //       //   success(function (data) {
    //       //     $scope.awesomeThings.loading = false;
    //       //     $scope.awesomeThings.description = data.description;
    //       //   }).
    //       //   error(function (data, status) {
    //       //     $scope.awesomeThings.loading = false;
    //       //     $scope.awesomeThings.error = data && data.description ? data : createUnknownError(status);
    //       //   });
    //     //}
    //     // });
        $scope.noximus = "working";
      }).
      error(function (data, status) {
        $scope.noximus = "error";
    });
  });
