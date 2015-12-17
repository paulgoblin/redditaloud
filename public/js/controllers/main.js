var app = angular.module('aloudApp')

app.controller('mainCtrl', function($scope, PostsSrvc){
  $scope.test = 'poop';
  $scope.posts = [];
  $scope.content = [];
  $scope.playNext = function(){
    if ($scope.content.length === 0) return;
    var message = $scope.content.shift();
    console.log(message);
    responsiveVoice.speak(message, "UK English Female", {onend: $scope.playNext});
  }

  $scope.togglePause = function(){
    if(responsiveVoice.isPlaying()) {
      responsiveVoice.pause();
    } else {
      responsiveVoice.resume();
    }
  }

  $scope.readPost = function(post){
    responsiveVoice.speak("Fetching post content. One moment please.");
    PostsSrvc.fetchPostContent(post.link).then(function(res){
      $scope.content = res.data;
      $scope.playNext();
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
