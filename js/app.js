var app = angular.module('myApp', ['ngResource']);
app.controller('PostsCtrl', function($scope, $resource) {
    var Post = $resource('http://localhost/comments/:id', null, {
        'update': {method:'PUT', params: {id: "@id"}}
    });
    $scope.posts = Post.query();
    $scope.post = false;
    $scope.npost = {};

    $scope.editPost = function () {
        $scope.post.$update(function() {
            $scope.post = false;
        });
    }

    $scope.showEditPost = function (post) {
        $scope.post = post;
    }

    $scope.newPost = function () {
        var post = Post.save(null, $scope.npost, function () {
            $scope.posts.push(post);
        })
    }

})
