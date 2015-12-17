var app = angular.module('aloudApp')

app.controller('mainCtrl', function($scope, PostsSrvc){
  $scope.test = 'poop';

  PostsSrvc.fetchPosts().then(function(res){
    console.log('yo');
    console.log(res.data);
  });

})
