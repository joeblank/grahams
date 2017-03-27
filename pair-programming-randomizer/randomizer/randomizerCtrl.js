angular.module('app')
.controller('randomizerCtrl', function($scope, mainService) {

  $scope.randomize = function() {
    $scope.students = mainService.getDm21();
  }

  var studentsToSwap = {
    first: {},
    second: {}
  };

  $scope.clear = function() {
    studentsToSwap = {
      first: {},
      second: {}
    };
  }

  $scope.swap = function() {
    if (!studentsToSwap.first.name || !studentsToSwap.second.name) {
      alert('Please select two students to switch.');
      return;
    }
    var index = studentsToSwap.first.index
    var i = studentsToSwap.first.i;
    var index2 = studentsToSwap.second.index
    var i2 = studentsToSwap.second.i;
    $scope.students[index][i] = studentsToSwap.second.name;
    $scope.students[index2][i2] = studentsToSwap.first.name;
  }

  $scope.highlightCheck = function(student) {
    // console.log('highlight fn running', student);
    for (var prop in studentsToSwap) {
      if (studentsToSwap[prop].name === student) {
        return true;
      }
    }
    return false;
  }

  $scope.change = function(student, index, i) {
    console.log(index, i);
    if (!studentsToSwap.first.name) {
      studentsToSwap.first.name = student;
      studentsToSwap.first.index = index;
      studentsToSwap.first.i = i
    } else if (!studentsToSwap.second.name) {
      studentsToSwap.second.name = student;
      studentsToSwap.second.index = index;
      studentsToSwap.second.i = i
    } else if (studentsToSwap.first.name && studentsToSwap.second.name) {
      studentsToSwap.first.name = studentsToSwap.second.name;
      studentsToSwap.first.index = studentsToSwap.second.index;
      studentsToSwap.first.i = studentsToSwap.second.i
      studentsToSwap.second.name = student;
      studentsToSwap.second.index = index;
      studentsToSwap.second.i = i
    }
    console.log(studentsToSwap)
  }


})
