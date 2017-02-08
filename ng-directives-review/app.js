angular.module('app', ['ui.router'])
.config(function($urlRouterProvider, $stateProvider) {


  $urlRouterProvider.otherwise('/home');

  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: './views/home.html',
    controller: 'mainCtrl'
  })
  .state('dashboard', {
    url: '/dashboard',
    templateUrl: './views/dashboard.html',
    controller: 'dashboardCtrl'
  })
  .state('detail', {
    url: '/detail/:studentId',
    templateUrl: './views/details.html',
    controller: 'detailCtrl'

  })









})
