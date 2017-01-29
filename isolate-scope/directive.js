angular.module('isolate-scope')
.directive('customDirective', function() {

  return {
    restrict: 'E',
    templateUrl: './directive.html',
    scope: {
      firstAttribute: '=',
      attributeTwo: '=secondAttribute',
      twoWayBinding: '=thirdAttribute',
      randomString: '@',
      redAlert: '&func'
    }
  }

})
