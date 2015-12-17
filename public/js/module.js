'use strict';

var app = angular.module('aloudApp', ['ui.router']);

app.constant('ENV', {
  API_URL: 'https://protected-cliffs-4451.herokuapp.com',
  LOCAL_API_URL: 'http://localhost:3000'
});

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('main', { url: '/', templateUrl: 'templates/main.html', controller:'mainCtrl'});
});
