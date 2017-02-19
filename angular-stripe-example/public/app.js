angular.module('angular-stripe', ['ui.router', 'angular-stripe'])
.config(function($stateProvider, $urlRouterProvider, stripeProvider) {

  // stripeProvider.setPublishableKey('pk_test_kzb5s0W7xy3ki3oWuG1lR7Nd');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: './home.html',
    controller: 'mainCtrl'
  })

  $urlRouterProvider.otherwise('/')




})
