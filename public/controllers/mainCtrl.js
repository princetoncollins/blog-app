var app = angular.module("blog-app");

app.controller('MainController', ['mainService', '$scope', '$http', '$location', '$stateParams', '$state', function(mainService, $scope, $http, $location, $stateParams, $state) { 

  $scope.formData = {};

  $scope.blog = mainService.blog;

  function getBlogs() {
      mainService.getPosts().then(function(data) {
        $scope.blog = data;
        console.log(data, "The blogs.");
      });
  }

  getBlogs();

  $scope.readPost = function(id) {
      mainService.readPost(id).then(function(data) {
        $scope.readblog = data;
        console.log(data, "This is the blog you selected.")
      });
  };

  $scope.addPost = function(data) {
      mainService.addPost($scope.formData).then(function(data) {
        $scope.formData = {};
        $location.path('blogs');
        $scope.blog.push(data);
        getBlogs();
        console.log(data, 'Blog created.');     
      }); 
  };

  $scope.deletePost = function(id) {
      mainService.deletePost(id).then(function() {
        getBlogs();
        console.log('Blog deleted.');
      })
  };

  // $http.get('/api/blogs').success(function(data){
  //     $scope.blog = data;
  //     console.log(data, "Here is the list of blogs.");
  //   }).error(function(data) {
  //     console.log('Error: ' + data);
  //   });

  // $scope.readPost = function(id) {
  //   $http.get('/api/blogs/' + id)
  //   .success(function(data) {
  //       $scope.readblog = data;
  //       console.log('This is the blog you selected.', data);
  //     });
  // };

  // $scope.addPost = function() {
  //   $http.post('/api/blogs', $scope.formData)
  //     .success(function(data) {
  //       $scope.formData = {};
  //       $location.path('blogs');
  //       console.log(data, 'Blog created.');
  //     })     
  //     .error(function(data) {
  //       console.log('Error: ' + data);
  //     })  
  // };

  // $scope.deletePost = function(id) {
  //   $http.delete('/api/blogs/' + id)
  //     .success(function(data) {
  //       $scope.blog = data;
  //       console.log('Blog deleted.', data);
  //       $http.get('/api/blogs').success(function(data){
  //         $scope.blog = data;
  //         console.log(data);
  //       });
  //     })
  //     .error(function(data) {
  //       console.log('Error: ' + data);
  //     });
  // };




}]);