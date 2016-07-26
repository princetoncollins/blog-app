var app = angular.module("blog-app");

app.controller('MainController', ['$rootScope', 'mainService', '$scope', '$http', '$location', '$stateParams', '$state', function($rootScope, mainService, $scope, $http, $location, $stateParams, $state) { 

  $scope.readPost = function(id) {
      mainService.readPost(id).then(function(data) {
        $scope.readblog = data;
        console.log(readblog, "This is the blog you selected.")
      });
  };

  $scope.addPost = function(newBlog) {
      mainService.addPost(newBlog).then(function(data) {
        $scope.blog = data;
        console.log(data);
        $state.go('blogs').then(function() {
          $state.reload('blogs');
        })
      }); 
  };

  $scope.deletePost = function(id) {
      mainService.deletePost(id).then(function() {
        console.log('Blog deleted.');
        // $state.go('blogs');
        getBlogs();
      })
  };

  function getBlogs() {
      mainService.getPosts().then(function(data) {
        $scope.blog = data;
      });
  }

  getBlogs();












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