var app = angular.module('blog-app', ['ngRoute', 'ui.router', 'ngAnimate']);

app.config(function($routeProvider, $stateProvider, $urlRouterProvider) {

 	$urlRouterProvider.otherwise('/home');

    $stateProvider

    .state('blogs', {
    	url: '/blogs',
    	templateUrl: 'views/main.html',
    	controller: 'MainController'
    })

    .state('blogs.readblog', {
    	url: "/readblog",
    	templateUrl: "views/readblog.html",
    	controller: "MainController"
    })

    .state('blogs.home', {
    	url: "/home",
    	templateUrl: 'views/home.html',
    	MainController: "MainController"
    })

    .state('newblog', {
    	url: '/newblog',
    	templateUrl: "views/newblog.html",
    	controller: "MainController"
    }); 

}); //End Config. OK