angular.module('app')
.controller('mainCtrl', function($scope, mainService) {

  $scope.login = function(teacherObject) {
    mainService.login(teacherObject)
  }


})
