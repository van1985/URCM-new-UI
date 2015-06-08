'use strict';

/**
 * @ngdoc function
 * @name pocLibsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pocLibsApp
 */
angular.module('pocLibsApp')
  .controller('callCtrl', function ($scope,$location) {

  	//Button mute & speaker enable/disabe
  	$scope.isMute = false;
  	$scope.isSpeaker = false;

  	//Views visibility
    $scope.contactsListVisible= false;
    $scope.dialPadVisible= false;
    $scope.showContactsButton=true;

    $scope.showTransferContactList = function() {
      $scope.contactsListVisible= true;
      $scope.dialPadVisible= false;
    };

    $scope.showTransferDialPad = function() {
      $scope.dialPadVisible= true;
      $scope.contactsListVisible= false;
    };

    $scope.showDialPad = function(){
    	$scope.contactsListVisible= false;
        $scope.dialPadVisible= true;
        //reset button visibility
        $scope.showContactsButton=false;
    };

    $scope.showCallControls = function() {
      $scope.contactsListVisible= false;
      $scope.dialPadVisible= false;
      //reset button visibility
      $scope.showContactsButton=true;
    };

    $scope.back = function(){
      $location.path("/contacts");
    };

  });