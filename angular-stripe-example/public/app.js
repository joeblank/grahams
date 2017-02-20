angular.module('stripe-app', ['ui.router', 'angular-stripe'])
.config(($stateProvider, $urlRouterProvider, stripeProvider) => {

  stripeProvider.setPublishableKey('pk_test_kzb5s0W7xy3ki3oWuG1lR7Nd');

  $urlRouterProvider.otherwise('/')

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: './home.html',
    controller: 'mainCtrl'
  })
  .state('congrats', {
    url: '/congrats',
    templateUrl: './congrats.html'
  })



})
