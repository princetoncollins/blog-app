var app = angular.module("blog-app");

app.service('mainService', function($http, $q) {



	this.getPosts = function() {
		return $http.get('/api/blogs').then(function(response) {
  	  		blog = response.data;
  	  		return blog;
    	});
	}

	this.readPost = function(id) {
		return $http.get('/api/blogs/' + id).then(function(response) {
	    	readblog = response.data;
	    	return readblog;
	  });
	};

	this.addPost = function(newBlog) {
		return $http.post('/api/blogs', newBlog).then(function(response) {
			blog = response.data;
			return response.data;
		});
	};

	this.deletePost = function(id) {
		return $http.delete('/api/blogs/' + id).then(function(response) {
	    	blog = response.data;
	  });
	};

}); //End service.