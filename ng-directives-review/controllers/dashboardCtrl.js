angular.module('app')
.controller('dashboardCtrl', function($scope, mainService) {

$scope.getData = function() {
  $scope.data = mainService.getData();
}



})
