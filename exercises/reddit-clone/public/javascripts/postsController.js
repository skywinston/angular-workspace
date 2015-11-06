var app = angular.module('redditClone', []);
app.controller('postsController', function($scope, $http){

  $http.get('/api/1/posts').then(function(response){
    $scope.posts = response.data;
  });

  $scope.newPost = {
    visible: false
  };

  $scope.posts = [];

  $scope.newPostForm = function(){
    $scope.newPost.visible = true;
    document.getElementById('title').focus();
  }

});
