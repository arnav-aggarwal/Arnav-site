angular.module('app', [])

.controller('MainController', function($scope){
  $scope.data = {
    text: "asdfa",
  };
})

.controller('ChildController', function($scope){
  
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