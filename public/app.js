var app = angular.module('blog-app', ['ngRoute', 'ui.router']);

app.config(function($routeProvider, $stateProvider, $urlRouterProvider) {

 	$urlRouterProvider.otherwise('/blogs');

    $stateProvider

    .state('blogs', {
    	url: '/blogs',
    	templateUrl: 'views/main.html',
    	controller: 'MainController'
    })

    .state('blogs.readblog', {
    	url: "/readblog",
    	templateUrl: "views/readblog.html",
    	controller: 'MainController'
    })

    .state('newblog', {
    	url: '/newblog',
    	templateUrl: "views/newblog.html",
    	controller: "MainController"
    }); 

}); //End Config. OK