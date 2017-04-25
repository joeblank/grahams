angular.module('app')
.controller('mainCtrl', function($scope, mainService) {

    $scope.send = function(email) {
        mainService.send(email)
    }

    // $scope.email = {
    //     to: 'joe.blank@live.com',
    //     subject: 'test email',
    //     body: 'here is the body'
    // }




    
})