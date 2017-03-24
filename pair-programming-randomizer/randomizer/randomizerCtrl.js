angular.module('app')
.controller('randomizerCtrl', function($scope, mainService) {

  $scope.stu = mainService.getDm21();




})
