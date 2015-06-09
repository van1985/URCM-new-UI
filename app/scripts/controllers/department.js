'use strict';

/**
 * @ngdoc function
 * @name pocLibsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pocLibsApp
 */
angular.module('pocLibsApp')
  .controller('DepartmentCtrl', function ($scope,$location,$rootScope,$timeout) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.departments={
    	'sporting':false,
    	'appliances':false,
    	'jewelry': false,
    	'garden': false,
    	'electronics':false,
    	'tools':false
    };

    $scope.connect = function() {
      $scope.setDepartmentDisableFlag = true;
      $rootScope.$broadcast('set-department-start');
      $timeout( function(){
          $rootScope.$broadcast('set-department-end');
          $scope.setDepartmentDisableFlag = false;
          $location.path("/contacts");
      }, 5000);
    };

  });
