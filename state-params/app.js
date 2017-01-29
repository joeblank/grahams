angular.module('state-params-example', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: './home/home.html',
    controller: 'homeCtrl'
  })
  .state('display', {
    url:'/display/:id',
    templateUrl: './display/display.html',
    controller: 'displayCtrl'
  })

})
