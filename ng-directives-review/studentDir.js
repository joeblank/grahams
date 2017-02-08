angular.module('app')
.directive('studentDir', function() {
  return {

    restrict: 'E',
    templateUrl: './views/studentDir.html',
    scope: {
      student: '='
    },
    link: function(scope, elem, attrs) {
      console.log(scope);
    }




  }
})
