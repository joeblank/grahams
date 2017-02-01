angular.module('gulp-example')
.controller('mainCtrl', ($scope) => {

  $scope.data = mainService.getData();

  $scope.number = `A great number is the number ${$scope.data[8]}`;

})
