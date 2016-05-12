var app = angular.module("blog-app");

app.controller('MainController', ['$scope', '$http', '$location', '$stateParams', '$state', function($scope, $http, $location, $stateParams, $state) { 

  $scope.formData = {};

  $scope.readblog = {};

  $http.get('/api/blogs').success(function(data){
      $scope.blog = data;
      console.log(data);
    }).error(function(data) {
      console.log('Error: ' + data);
    });

  $scope.addPost = function() {
    $http.post('/api/blogs', $scope.formData)
      .success(function(data) {
        $scope.formData = {};
        $scope.blogs = data;
        $state.go('blogs');
        console.log(data, 'Blog created.');
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };

  $scope.deletePost = function(id) {
    $http.delete('/api/blogs/' + id)
      .success(function(data) {
        $scope.blogs = data;
        console.log('Blog deleted.', data);
        $http.get('/api/blogs').success(function(data){
          $scope.blog = data;
          console.log(data);
        });
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };

  $scope.readPost = function(id) {
    $http.get('/api/blogs/' + id)
      .success(function(data) {
        // $state.go('readblog');
        // $scope.readblog = data;
        console.log('This is the blog you selected.', data);
      });
  };


}]);