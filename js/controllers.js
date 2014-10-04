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
        $scope.alert = "warning";
        $scope.messagePre = "Hi there! ";
        $scope.message = "Please enter your answer at the bottom, the equal sign will turn green when you get the correct answer. ";
        $scope.initialized = 0;
      }
      $scope.check = function() {
        var dec = 1;
        switch($scope.maxRating){
          case 1:
            dec = 10;
            break;
          case 2:
            dec = 100;
            break;
          case 3:
            dec = 100;
            break;
          case 4:
            dec = 1000;
            break;
          case 5:
            dec = 10000;
            break;
        }
        switch ($scope.operation){
          case "+":
            var ans = Math.floor((Number($scope.numone) + Number($scope.numtwo))*dec)/dec;
            if(ans == $scope.answer){
              $scope.has = "success";
              $scope.correct = true;
            } else {
              $scope.has = "error";
            }
            break;
          case "-":
            var ans = Math.floor(($scope.numone - $scope.numtwo)*dec)/dec;
            if(ans == $scope.answer){
              $scope.has = "success";
              $scope.correct = true;
            } else {
              $scope.has = "error";
            }
            break;
          case "x":
            var ans = Math.floor(($scope.numone * $scope.numtwo)*dec)/dec;
            if(ans == $scope.answer){
              $scope.has = "success";
              $scope.correct = true;
            } else {
              $scope.has = "error";
            }
            break;
          case "/":
            var ans = Math.floor(($scope.numone / $scope.numtwo)*dec)/dec;
            if(ans == $scope.answer){
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
        var dec = 1;
        switch($scope.maxRating){
          case 1:
            dec = 10;
            break;
          case 2:
            dec = 100;
            break;
          case 3:
            dec = 100;
            break;
          case 4:
            dec = 1000;
            break;
          case 5:
            dec = 10000;
            break;
        }
        if($scope.initialized != 0){
          switch ($scope.operation){
            case "+":
              var ans = Math.floor(($scope.numone + $scope.numtwo)*dec)/dec;
              if(ans == $scope.answer){
                $scope.alert = "success";
                $scope.messagePre = "Nice answer! ";
                $scope.message = "You were correct, " + $scope.numone + " " + $scope.operation + " " + $scope.numtwo + " = " + $scope.answer;
              } else {
                $scope.alert = "danger";
                $scope.messagePre = "Too bad! ";
                $scope.message = "you were wrong, " + $scope.numone + " " + $scope.operation + " " + $scope.numtwo + " = " + ans + ", not " + $scope.answer;
              }
              break;
            case "-":
              var ans = Math.floor(($scope.numone - $scope.numtwo)*dec)/dec;
              if(ans == $scope.answer){
                $scope.alert = "success";
                $scope.messagePre = "Nice answer! ";
                $scope.message = "You were correct, " + $scope.numone + " " + $scope.operation + " " + $scope.numtwo + " = " + $scope.answer;
              } else {
                $scope.alert = "danger";
                $scope.messagePre = "Too bad! ";
                $scope.message = "you were wrong, " + $scope.numone + " " + $scope.operation + " " + $scope.numtwo + " = " + ans + ", not " + $scope.answer;
              }
              break;
            case "x":
              var ans = Math.floor(($scope.numone * $scope.numtwo)*dec)/dec;
              if(ans == $scope.answer){
                $scope.alert = "success";
                $scope.messagePre = "Nice answer! ";
                $scope.message = "You were correct, " + $scope.numone + " " + $scope.operation + " " + $scope.numtwo + " = " + $scope.answer;
              } else {
                $scope.alert = "danger";
                $scope.messagePre = "Too bad! ";
               $scope.message = "you were wrong, " + $scope.numone + " " + $scope.operation + " " + $scope.numtwo + " = " + ans + ", not " + $scope.answer;
              }
              break;
            case "/":
              var ans = Math.floor(($scope.numone / $scope.numtwo)*dec)/dec;
              if(ans == $scope.answer){
                $scope.alert = "success";
                $scope.messagePre = "Nice answer! ";
                $scope.message = "You were correct, " + $scope.numone + " " + $scope.operation + " " + $scope.numtwo + " = " + $scope.answer;
              } else {
                $scope.alert = "danger";
                $scope.messagePre = "Too bad! ";
                $scope.message = "you were wrong, " + $scope.numone + " " + $scope.operation + " " + $scope.numtwo + " = " + ans + ", not " + $scope.answer;              }
              break;
          }
        }
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
        switch($scope.maxRating){ //there needs to be a special case for division, cause that shit could be really hard even with small number.... also needs to make sure the second Number is smaller than the first for the first difficulty
          case 1:
            if($scope.operation == "-"){
              $scope.numone = Math.floor(Math.random() * 10) + 1;
              $scope.numtwo = Math.floor(Math.random() * $scope.numtwo) + 1;
            } else if($scope.operation == "/"){
              $scope.numtwo = Math.floor(Math.random() * 10) + 1;
              $scope.numone = $scope.numtwo * (Math.floor(Math.random() * 5) + 1);
            } else {
              $scope.numone = Math.floor(Math.random() * 10) + 1;
              $scope.numtwo = Math.floor(Math.random() * 10) + 1;
            }
            break;
          case 2:
            if($scope.operation == "/"){
              $scope.numtwo = Math.floor(Math.random() * 100) + 1;
              $scope.numone = $scope.numtwo * (Math.floor(Math.random() * 10) + 1);
            } else {
              $scope.numone = Math.floor(Math.random() * 100) + 1;
              $scope.numtwo = Math.floor(Math.random() * 100) + 1;
            }
            break;
          case 3:
            if($scope.operation == "/"){
              $scope.numtwo = Math.floor(Math.random() * 20) + 1;
              $scope.numone = Math.floor(Math.random() * 20) + 1;
            } else {
              $scope.numone = (Math.floor(Math.random() * 100) + 1)/10;
              $scope.numtwo = (Math.floor(Math.random() * 100) + 1)/10;
            }
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
        $scope.answer = "";
      }
      $scope.init();
      $scope.newProblem();
      $scope.initialized = 1;
  }])
  .controller('BusinessCtrl', ['$scope', '$http', '$location', 'BusinessService', function($scope, $http, $location, Business) {
  }])
  .controller('MapCtrl', ['$scope', '$http', function($scope, $http) {
  }])
  .controller('StatsCtrl', ['$scope', '$http', function($scope, $http) {
  }])
  .controller('NavCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    }
  }]);