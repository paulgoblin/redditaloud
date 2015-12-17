var app = angular.module('aloudApp')

app.controller('mainCtrl', function($scope, PostsSrvc){
  $scope.test = 'poop';
  $scope.posts = [];

  $scope.readPost = function(link){
    console.log(link);
    // responsiveVoice.speak(message);
  }

  PostsSrvc.fetchPosts().then(function(res){
    $scope.posts = res.data;
  },function(err){
    console.log(err);
  });

})
