var app = angular.module('myApp', ['ngResource']);
app.controller('PostsCtrl', function($scope, $resource) {
    var Post = $resource('http://localhost/comments/:id', null, {
        'update': {method:'PUT', params: {id: "@id"}}
    });
    $scope.posts = Post.query();
    $scope.post = Post.get({id : 1}, function () {
        $scope.post.name = "first";
        $scope.post.content = "My first comment";
        $scope.post.$update();
    });

    var post = new Post;
    post.name = "seven";
    post.content = "My seven comment";
    post.$save();
})
