'use strict';

var app = angular.module('aloudApp');

app.service('PostsSrvc', function($http, ENV) {
  this.fetchPosts = function() {
    console.log(`${ENV.API_URL}/redditposts/posts/tifu`);
    return $http.get(`${ENV.API_URL}/redditposts/posts/tifu`);
  };
  this.fetchPostContent = function(link) {
    return $http.post(`${ENV.API_URL}/redditposts/content`, {url: link});
  };
});
