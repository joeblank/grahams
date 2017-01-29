angular.module('isolate-scope')
.controller('mainCtrl', function($scope) {

  $scope.first = 'first item on $scope in mainCtrl';
  $scope.second = 'second item on $scope in mainCtrl';
  $scope.redAlert = function(name) {
    if (!name) {
      alert('What\'s your name, Private?!?!?!');
      return;
    }
    alert(name + ', this is a \'RED\' alert, all hands on deck!');
  }
})
