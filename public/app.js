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
	    	// 'newBlog@blogs': {
		    // 	templateUrl: "views/menu.html",
		    // 	controller: "MainController"
		    // }
    	}
    })

    .state('blogs.readblog', {
    	url: "/readblog",
    	views: {
    		'mainContent@blogs': {
    			templateUrl: 'views/readblog.html',
    			controller: 'MainController'
    		}
    	}
    })

    .state('blogs.newblog', {
    	url: "/newblog",
    	views: {
    		'newBlog@blogs': {
    			templateUrl: 'views/newblog.html',
    			controller: 'MainController'
    		}
    	}
    });

}); //End Config. OK