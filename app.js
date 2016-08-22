angular.module('app', [])

.controller('MainController', function($scope){
  $scope.changeLoops = function(code){
    return code;
  };

  $scope.execute = function(){
    const userCode = $scope.changeLoops($scope.data.userCode);

    //insert let loopChecker = 0; && loopChecker++ <= 1000;
    const forLoopRegex = /for\(/;
    const loopCheckerAdded = userCode.replace(forLoopRegex, 'for(let loopChecker = 0, ')

    //not working:
    const secondConditionRegex = /for*(?=\;)/;

    //replace 'for(' ... ';' with 'for(' ... '; loopChecker++ < 1000000 && '
    console.log('loopCheckerAdded: ', loopCheckerAdded);
    let index = loopCheckerAdded.match(secondConditionRegex).index;
    console.log('index: ', index);
  };
})































// .config(function($routeProvider){
//   $routeProvider
//     .when('/', {
//       templateUrl: 'home.html',
//       controller: 'HomeController'
//     })
//     .otherwise({
//       redirectTo: '/'
//     });
// });