angular.module('app', [])

.controller('MainController', function($scope){
  $scope.changeLoops = function(code){
    return code;
  };

  $scope.execute = function(){
    const raw = $scope.changeLoops($scope.data.userCode);
    console.log(raw);
    //insert let loopChecker = 0; && loopChecker++ <= 1000;
    
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