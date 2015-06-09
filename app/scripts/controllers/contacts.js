'use strict';

/**
 * @ngdoc function
 * @name pocLibsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pocLibsApp
 */
angular.module('pocLibsApp')
  .controller('ContactsCtrl', function ($scope,$location,$rootScope,$timeout) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.user={
    	status: 'online'
    };


    $scope.navigate = function(view){
      $location.path("/"+view);
    };

    $scope.disconnect = function(){
      $scope.disconnectDisableFlag = true;
      $rootScope.$broadcast('logout-start');
      $timeout( function(){
          $rootScope.$broadcast('logout-end');
          $scope.disconnectDisableFlag = false;
          $location.path("/");
      }, 5000);
    };

  });
