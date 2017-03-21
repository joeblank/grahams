angular.module('wiki')
.service('mainService', function($http) {
console.log('hey');
  this.getData = function() {
    return $http({
      method: 'GET',
      url: 'https://en.wikipedia.org/w/api.php?action=opensearch&search=cat&format=json&callback=?'
    }).then(function(response) {
      console.log(response.data)
    })
  }
  // this.getData();



})
