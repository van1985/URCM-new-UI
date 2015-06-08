'use strict';

/**
 * @ngdoc function
 * @name pocLibsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pocLibsApp
 */
angular.module('pocLibsApp')
  .controller('consultativeTransferCtrl', function ($scope) {

  	$scope.isVisibleControlsUser1 = true;
  	$scope.isVisibleControlsUser2 = false;

  	$scope.changeToUser1 = function(){
  		$scope.isVisibleControlsUser1 = true;
  		$scope.isVisibleControlsUser2 = false;	
  	};

  	$scope.changeToUser2 = function() {
  		$scope.isVisibleControlsUser1 = false;
  		$scope.isVisibleControlsUser2 = true;
  	};

    $scope.countTabs =3;

  });