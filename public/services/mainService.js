var app = angular.module("blog-app");

app.service('mainService', function($http, $q) {

	var blog = [];
	var readblog = {};
	var formData = {};

	this.getPosts = function() {
		return $http.get('/api/blogs').then(function(response){
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

	this.addPost = function(formData) {
		return $http.post('/api/blogs', formData);
	};

	this.deletePost = function(id) {
		return $http.delete('/api/blogs/' + id).then(function(response) {
	    	blog = response.data;
	  });
	};

}); //End service.