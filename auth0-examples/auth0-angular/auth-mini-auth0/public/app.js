angular.module('app', ['ui.router'])
.config(function($urlRouterProvider, $stateProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: './home/home.html',
    controller: 'homeCtrl'
  })
  .state('private', {
    url: '/private',
    templateUrl: './private/private.html',
    controller: 'privateCtrl',
    resolve: {
      authed: function($http, $window) {
        return $http({
          method: 'GET',
          url: '/user/authed'
        }).then(function(response) {
          console.log('resolve: ', response);
          if (response.status !== 200 || !response.data) {
            $window.location.href = 'http://localhost:3333/#!/'
          } else {
            return response.data
          }
        })
      }
    }
  })

})
