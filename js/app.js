var app = angular.module('myApp', ['ngResource']);
app.factory('Post', function ($resource) {
    return $resource('http://localhost/comments/:id', null, {
        'update': {method:'PUT', params: {id: "@id"}}
    });
})
app.controller('PostsCtrl', function($scope, Post) {
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
