var app = angular.module('blog-app', ['ui.router', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider) {

 	$urlRouterProvider.otherwise('/blogs');

    $stateProvider

    .state('blogs', {
    	url: '/blogs',
    	views: {
    		'': {
    			templateUrl: 'views/main.html',
    			controller: 'MainController'
    		},
    		'mainContent@blogs': {
    			templateUrl: 'views/home.html',
    			controller: 'MainController'
    		}
    	}
    })

    .state('blogs.readblog', {
    	url: "/readblog",
    	templateUrl: 'views/readblog.html',
    	controller: 'MainController'
    })

    .state('newblog', {
    	url: '/newblog',
    	templateUrl: "views/newblog.html",
    	controller: "MainController"
    }); 

}); //End Config. OK