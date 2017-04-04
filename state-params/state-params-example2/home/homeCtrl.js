angular.module('movies')
.controller('homeCtrl', function($scope, mainService) {

  $scope.movies = mainService.movies;

  console.log($scope.movies);

})
