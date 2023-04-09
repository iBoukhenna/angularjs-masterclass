var app = angular.module('myApp', ['ngResource']);
app.controller('PostsCtrl', function($scope, $resource) {
    var Post = $resource('http://localhost/comments/:id');
    $scope.posts = Post.query();
})
