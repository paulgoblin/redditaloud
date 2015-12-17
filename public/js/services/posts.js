'use strict';

var app = angular.module('aloudApp');

app.service('PostsSrvc', function($http, ENV) {
  this.fetchPosts = function() {
    return $http.get(`${ENV.API_URL}/redditposts/tifu`);
  };
});