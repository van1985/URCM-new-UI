'use strict';

/**
 * @ngdoc function
 * @name pocLibsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pocLibsApp
 */
angular.module('pocLibsApp')
  .controller('DepartmentCtrl', function ($scope) {
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
  });
