var app = angular.module('myApp', ['ngResource']);
app.controller('PostsCtrl', function($scope, $resource) {
    var Post = $resource('http://localhost/comments/:id');
    $scope.posts = Post.query();
    $scope.post = Post.get({id : 1});

    var post = new Post;
    post.name = "seven";
    post.content = "My seven comment";
    post.$save();
})
