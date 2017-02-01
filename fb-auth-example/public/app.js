angular.module('fb-auth', ['ui.router'])
.config(($stateProvider, $urlRouterProvider) => {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: './app/home/home.html',
    controller: 'homeCtrl'
  })
  .state('login', {
    url: '/login',
    templateUrl: './app/login/login.html',
    controller: 'loginCtrl'
  })

})
