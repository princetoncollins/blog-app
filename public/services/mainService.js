var app = angular.module("blog-app", []);

app.service('mainService', function($http, $q) {

	var blog = [];

  	$http.get('/api/blogs').success(function(data, status, headers){
  		angular.copy(data, blog);
    })

    return {
    	blog: blog.data
    }

  // this.getPosts = function() {
  // 	$http.get('/api/blogs').success(function(data){
  //     console.log(data);
  //     return data;
  //   }).error(function(data) {
  //     console.log('Error: ' + data);
  //   });
  // };

  // this.readPost = function(id) {
  //   $http.get('/api/blogs/' + id)
  //   .success(function(data) {
  //       $scope.readblog = data;
  //       console.log('This is the blog you selected.', data);
  //     });
  // };

  // this.addPost = function() {
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

  // this.deletePost = function(id) {
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

}; //End service.