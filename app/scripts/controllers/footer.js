'use strict';

/**
 * @ngdoc function
 * @name pocLibsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pocLibsApp
 */
angular.module('pocLibsApp')
  .controller('FooterCtrl', function ($scope,$location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

   $scope.navigate = function (view) {
     if (view ==='contacts'){
        $location.path("/contacts");
     }
     if (view ==='numpad'){
        $location.path("/numpad");
     }
   };

  });