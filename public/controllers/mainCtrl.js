var app = angular.module("blog-app");

app.controller('MainController', ['$scope', '$http', function($scope, $http, mainService) { 

  $scope.apptitle = "AngularJS Blog";

  $scope.formData = {};

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

}]);