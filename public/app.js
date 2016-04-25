var app = angular.module('blog-app', ['ngRoute']);

app.config(function($routeProvider) {

	$routeProvider
	
	.when('/', {
		templateUrl: 'views/main.html',
		controller: 'MainController'
	})
	  
	.when('/newblog', {
		templateUrl: 'views/newblog.html',
		controller: 'MainController'
	})
	  
	.otherwise({
      redirectTo: '/'
    });

}) //End Config. OK