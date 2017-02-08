angular.module('app')
.controller('detailCtrl', function($scope, mainService, $stateParams) {

var getStudent = function() {
  $scope.singleStu = mainService.getStudent($stateParams.studentId);
  console.log($scope.singleStu);
}
getStudent();



})
