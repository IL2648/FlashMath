'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('HomeCtrl', ['$scope', '$http', '$location', 'BusinessService', function($scope, $http, $location, Business) {
  		$scope.init = function () {
        $scope.maxRating=1;
        $scope.addition = true;
        $scope.subtraction = false;
        $scope.multiplication = false;
        $scope.division = false;
        $scope.numone = 13;
        $scope.numtwo = 7;
        $scope.operation = "-";
        $scope.answer = "";
        $scope.has = "warning";
        $scope.correct = false;
  		}
      $scope.check = function() {
        switch ($scope.operation){
          case "+":
            if($scope.numone + $scope.numtwo == $scope.answer){
              $scope.has = "success";
              $scope.correct = true;
            } else {
              $scope.has = "error";
            }
            break;
          case "-":
            if($scope.numone - $scope.numtwo == $scope.answer){
              $scope.has = "success";
              $scope.correct = true;
            } else {
              $scope.has = "error";
            }
            break;
          case "x":
            if($scope.numone * $scope.numtwo == $scope.answer){
              $scope.has = "success";
              $scope.correct = true;
            } else {
              $scope.has = "error";
            }
            break;
          case "/":
            if($scope.numone / $scope.numtwo == $scope.answer){
              $scope.has = "success";
              $scope.correct = true;
            } else {
              $scope.has = "error";
            }
            break;
        }
      }
      $scope.newProblem = function() {
        var ops = [];
        if($scope.addition){
          ops += "+";
        }
        if($scope.subtraction){
          ops += "-";
        }
        if($scope.multiplication){
          ops += "x";
        }
        if($scope.division){
          ops += "/";
        }
        $scope.operation = ops[Math.floor(Math.random() * ops.length)];
        switch($scope.maxRating){ //there needs to be a special case for division, cause that shit could be really hard even with small numbers.... also needs to make sure the second number is smaller than the first for the first difficulty
          case 1:
            $scope.numone = Math.floor(Math.random() * 10) + 1;
            $scope.numtwo = Math.floor(Math.random() * 10) + 1;
            break;
          case 2:
            $scope.numone = Math.floor(Math.random() * 100) + 1;
            $scope.numtwo = Math.floor(Math.random() * 100) + 1;
            break;
          case 3:
            $scope.numone = (Math.floor(Math.random() * 100) + 1)/10;
            $scope.numtwo = (Math.floor(Math.random() * 100) + 1)/10;
            break;
          case 4:
            $scope.numone = (Math.floor(Math.random() * 1000) + 1)/10;
            $scope.numtwo = (Math.floor(Math.random() * 1000) + 1)/10;
            break;
          case 5:
            $scope.numone = (Math.floor(Math.random() * 100000) + 1)/1000;
            $scope.numtwo = (Math.floor(Math.random() * 100000) + 1)/1000;
            break;
        }
        $scope.has = "warning";
        $scope.correct = false;
      }
      $scope.init();
      $scope.newProblem();
  }])
  .controller('BusinessCtrl', ['$scope', '$http', '$location', 'BusinessService', function($scope, $http, $location, Business) {
  }])
  .controller('MapCtrl', ['$scope', '$http', function($scope, $http) {
  }])
  .controller('NavCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    }
  }]);