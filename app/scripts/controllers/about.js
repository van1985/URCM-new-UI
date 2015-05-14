'use strict';

/**
 * @ngdoc function
 * @name pocLibsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pocLibsApp
 */
angular.module('pocLibsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
