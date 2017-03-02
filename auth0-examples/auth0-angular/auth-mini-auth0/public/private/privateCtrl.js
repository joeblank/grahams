angular.module('app')
.controller('privateCtrl', function($scope, authed) {

console.log(authed);

  $scope.authed = authed;


})
