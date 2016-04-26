var app = angular.module("blog-app");

app.controller('MainController', ['$scope', '$http', function($scope, $http) { 

  $scope.apptitle = "AngularJS Blog";

  var blogpost = {
    title: '',
    author: '',
    body: ''
  };

  var blog = this;

  $scope.blog = [
    {
      title: 'First Blog Post', 
      author: 'Princeton Collins', 
      pubdate: new Date('2014', '03', '08'), 
      body: 'This is the first post.'
    },
    {
      title: 'Second Blog Post', 
      author: 'Ezra Nash Collins', 
      pubdate: new Date('2014', '03', '08'), 
      body: 'Blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah.'
    },
    {
      title: 'Third Blog Post', 
      author: 'Isabel Quayle Collins', 
      pubdate: new Date('2014', '03', '08'), 
      body: 'Blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah.'
    },
    {
      title: 'Fourth Blog Post', 
      author: 'Sarah Jane Collins', 
      pubdate: new Date('2014', '03', '08'), 
      body: 'Blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah. Blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah. Blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah.'
    }     
    ]


//Create a new blog post.

  blog.addPost = function() {
    blog.unshift(this.post);
    console.log("Post made.");
  }

}]);