'use strict';

app.controller('PostsCtrl', function($scope, $location, Post){
  $scope.posts = Post.all; // not a method, just an returns object

  $scope.deletePost = function(postId) {
    Post.delete(postId);
  }

});
