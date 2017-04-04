angular.module('movies')
.controller('detailsCtrl', function($scope, mainService, $stateParams) {

  var movies = mainService.movies;

  for (var i = 0; i < movies.length; i++) {
    if ( movies[i].id === parseInt($stateParams.id) ) {
      $scope.singleMovie = movies[i];
    }
  }


})
