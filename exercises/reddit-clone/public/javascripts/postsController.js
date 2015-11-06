var app = angular.module('redditClone', []);
app.controller('postsController', function($scope, $http){

  $http.get('/api/1/posts').then(function(response){
    $scope.posts = response.data;
  });
  
  $scope.posts = [];

});
