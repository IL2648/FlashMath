'use strict';

/* Controllers */

angular.module('myApp.controllers', ['nvd3ChartDirectives'])
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
  .controller('HelpCtrl', ['$scope', '$http', function($scope, $http) {
      $scope.init = function () {
        $scope.anyExpanded = false;
        var difficultyInfo = "Difficulty level for generated problems can be changed using the sliding bar on " +
                                "the left side of the page. Slide the bar to the right for more difficult problems, or " +
                                " to the left for less difficulty. Please note your changes will not be applied until you " + 
                                "click the 'New Problem' button.";
        var topicsInfo = "Question topics can be changed in the left side of the page under the section 'Topics.' You may " +
                                "select one or more topics to be quizzed on. Generated problems will randomly rotate through " +
                                "the topics of your selection. Please note your changes will not be applied until you " + 
                                "click the 'New Problem' button.";
        var answeringAQuestionInfo = "Answer a displayed question by clicking in the text area preceeded by the '=' sign and "+
                                "with the grey text saying 'answer.' As soon as you start typing, the color of the box will turn "+
                                "green or red, indicating the correctness of your answer. If the box is red, your answer is incorrect "+
                                ". If it is green, you were right! After you answer a question sufficiently or feel like giving up "+
                                "or moving to the next question, just click the 'New Problem' button on the left. You will then be "+
                                "presented with a new problem, and the info text above the problem will display how did you on the "+
                                "previous problem.";
        var movingToNextQuestionInfo = "To move onto the next question, click the 'New Problem' button at any time.";
        $scope.helpTopics = [{title:'Difficulty',show:false,info:difficultyInfo},
                            {title:'Math Topics',show:false,info:topicsInfo},
                            {title:'Answering a Question',show:false,info:answeringAQuestionInfo},
                            {title:'Moving to Next Question',show:false,info:movingToNextQuestionInfo}];
      }
      $scope.getExpandedTopic = function(){
        for(var i=0;i<$scope.helpTopics.length;i++){
          if($scope.helpTopics[i].show==true){
            return $scope.helpTopics[i];
          }
        }
        return null;
      }
      $scope.expand = function(option){
        //If another topic is expanded, switch out which one is expanded
        if($scope.anyExpanded){
          var expandedTopic = $scope.getExpandedTopic();
          if(expandedTopic==option){
            option.show = !option.show;
            $scope.anyExpanded = option.show;
          } else{
            expandedTopic.show = false;
            option.show = true;
          }
        } else{
          option.show = !option.show;
          $scope.anyExpanded = option.show;
        }
      }
      $scope.init();
  }])
  .controller('StatsCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.exampleData = [
      { key: "13% wrong", y: 13 },
      { key: "98% correct", y: 87 }
     ];
     $scope.difficulty = 0;
     $scope.subject = 0;

    var colorArray = ['#da4f49', '#5bb75b'];


    $scope.colorFunction = function() {
      return function(d, i) {
          return colorArray[i];
        };
    }

     $scope.xFunction = function(){
        return function(d) {
            return d.key;
        };
    }

    $scope.yFunction = function(){
        return function(d) {
            return d.y;
        };
    }
  }])
  .controller('NavCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    }
  }])
  .controller('HistoryCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.difficulty = 0;
    $scope.subject = 0;
    $scope.limit = 0;
    $scope.problems = [
      {
        'success' : 'success',
        'difficulty' : 'easy',
        'argOne' : '4',
        'operation' : '+',
        'argTwo' : '2',
        'correct' : '6',
        'answer' : '6'
      },
      {
        'success' : 'success',
        'difficulty' : 'easy',
        'argOne' : '4',
        'operation' : '+',
        'argTwo' : '2',
        'correct' : '6',
        'answer' : '6'
      },
      {
        'success' : 'danger',
        'difficulty' : 'easy',
        'argOne' : '4',
        'operation' : '+',
        'argTwo' : '7',
        'correct' : '11',
        'answer' : '10'
      },
      {
        'success' : 'success',
        'difficulty' : 'easy',
        'argOne' : '4',
        'operation' : '+',
        'argTwo' : '2',
        'correct' : '6',
        'answer' : '6'
      }
    ];
  }]);