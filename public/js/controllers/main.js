var app = angular.module('aloudApp')

app.controller('mainCtrl', function($scope, PostsSrvc){
  $scope.test = 'poop';
  $scope.posts = [];

  $scope.readPost = function(link){
    PostsSrvc.fetchPostContent(link).then(function(res){
      console.log(res.data);
      responsiveVoice.speak("hello world");
    }, function(err){
      console.log(err);
    })
  }

  PostsSrvc.fetchPosts().then(function(res){
    $scope.posts = res.data;
  },function(err){
    console.log(err);
  });

})
