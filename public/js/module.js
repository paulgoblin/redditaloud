'use strict';

var app = angular.module('aloudApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('main', { url: '/', templateUrl: 'templates/main.html', controller:'mainCtrl'});
});
