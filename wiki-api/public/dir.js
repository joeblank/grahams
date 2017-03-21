angular.module('wiki')
.directive('dir', function() {
  return {
    restrict: 'AE',
    link: function(scope, elem, attrs) {

     var api='https://en.wikipedia.org/w/api.php?action=opensearch&search=cat&format=json&callback=?';


    $.ajax({
      type:"GET",
      url:api,
      async:false,
      dataType:"json",
      success:function(data){
        console.log('data', data)
      },
      error:function(errorMessage){
        alert('ERROR');}

        })

  }
}})  
