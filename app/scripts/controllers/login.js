'use strict';

/**
 * @ngdoc function
 * @name pocLibsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pocLibsApp
 */
angular.module('pocLibsApp')
  .controller('LoginCtrl', function ($scope,$location, $timeout, $rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  
    $scope.login = function() {
      $scope.loginDisableFlag = true;
      $rootScope.$broadcast('login-start');
      $timeout( function(){
          $scope.loginDisableFlag = false;
          $location.path("/department");
          $rootScope.$broadcast('login-end');    
      }, 5000);
    };


  });
