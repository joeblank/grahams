angular.module('state-params-example')
.controller('displayCtrl', function($scope, mainService, $stateParams) {

var foodData = mainService.getFoodData();

$scope.singleItem = foodData.filter(function(data) {
  console.log('hey');
  return data.id === parseInt($stateParams.id)
})


})
