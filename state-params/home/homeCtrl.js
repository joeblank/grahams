angular.module('state-params-example')
.controller('homeCtrl', function($scope, mainService) {

  $scope.foodData = mainService.getFoodData();

})
