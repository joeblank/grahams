angular.module('app')
.service('mainService', function($http) {

this.send = function(email) {
    return $http({
        method: "POST",
        url: '/api/send_email',
        data: email
    }).then(function(response) {
        console.log('response', response)
    })
}




    
})