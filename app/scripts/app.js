'use strict';

/**
 * @ngdoc overview
 * @name pocLibsApp
 * @description
 * # pocLibsApp
 *
 * Main module of the application.
 */
angular
  .module('pocLibsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'snap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/notification', {
        templateUrl: 'views/notification.html',
        controller: 'NotificationCtrl'
      })
      .when('/contacts', {
        templateUrl: 'views/contacts.html',
        controller: 'ContactsCtrl'
      })
      .when('/department', {
        templateUrl: 'views/department.html',
        controller: 'DepartmentCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/numpad', {
        templateUrl: 'views/numpad.html',
        controller: 'NumpadCtrl'
      })
      .when('/incomingcall', {
        templateUrl: 'views/call/incoming-call.html',
        controller: 'incomingCallCtrl'
      })
      .when('/calling', {
        templateUrl: 'views/call/calling.html',
        controller: 'callingCtrl'
      })
      .when('/call', {
        templateUrl: 'views/call/call.html',
        controller: 'callCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
