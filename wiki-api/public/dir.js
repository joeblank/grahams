angular.module('wiki')
.directive('dir', function($timeout) {
  return {
    restrict: 'AE',
    templateUrl: './test.html',
    controller: 'testCtrl',
    link: function(scope, elem, attrs) {
      scope.hello = 'hi'
      var catData;
      console.log(catData);
      scope.catData = catData;
     var api='https://en.wikipedia.org/w/api.php?action=opensearch&search=cat&format=json&callback=?';


    scope.theData = $.ajax({
      type: "GET",
      url: api,
      async: false,
      dataType: "json",
      success: function(data){
        console.log(data)
        return data
      },
      error:function(errorMessage){
        alert('ERROR');}

        })
        $timeout(function() {
          console.log(scope.theData)
        }, 500)
  }
}})
