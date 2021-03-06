'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'ui.map',
  'ui-rangeSlider'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
  $routeProvider.when('/help', {templateUrl: 'partials/help.html', controller: 'HelpCtrl'});
  $routeProvider.when('/history', {templateUrl: 'partials/history.html', controller: 'HistoryCtrl'});
  $routeProvider.when('/stats', {templateUrl: 'partials/stats.html', controller: 'StatsCtrl'});
  $routeProvider.when('/business', {templateUrl: 'partials/business.html', controller: 'BusinessCtrl'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
