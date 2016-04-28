var app = angular.module("blog-app");

app.controller('MainController', ['$scope', '$http', function($scope, $http, mainService) { 

  $scope.apptitle = "AngularJS Blog";

  $http.get('blogs.json').success(function(data){
      $scope.blog = data;
    });

  $scope.addPost = function() {
    var post = {
      title: $scope.post.title,
      body: $scope.post.body,
      author: $scope.post.author
    };
    $scope.blog.unshift(post);
    var data = JSON.stringify(post.serializeArray());
    $http({
      method: "POST",
      url: "../blogs.json",
      data: post,
      success: function(){},
      dataType: "JSON",
      contentType: 'application/json; charset=utf-8'
    })
    console.log('Blog created.');
  }

}]);