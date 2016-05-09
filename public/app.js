var app = angular.module('blog-app', ['ngRoute', 'ui.router']);

app.config(function($routeProvider, $stateProvider, $urlRouterProvider) {

	// $routeProvider
	
	// .when('/', {
	// 	templateUrl: 'views/main.html',
	// 	controller: 'MainController'
	// })
	  
	// .when('/newblog', {
	// 	templateUrl: 'views/newblog.html',
	// 	controller: 'MainController'
	// })
	  
	// .when('/readblog/:blog_id', {
	// 	templateUrl: 'views/readblog.html',
	// 	controller: 'MainController'
	// })

	// .otherwise({
 //      redirectTo: '/'
 //    });

 	$urlRouterProvider.otherwise('/blogs');

    $stateProvider

    .state('blogs', {
    	url: "/blogs",
    	templateUrl: "views/main.html",
    	controller: "MainController"
    })
    .state('newblog', {
    	url:"/newblog",
    	templateUrl: "views/newblog.html",
    	controller: "MainController"
    }) 
    .state('readblog', {
    	url: "/blogs/:blog_id",
    	templateUrl: "views/readblog.html",
    	controller: "MainController"
    	// params: { 'id':'_id'}
    })

}); //End Config. OK