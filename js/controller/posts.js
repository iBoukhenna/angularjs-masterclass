app.controller('PostsCtrl', function ($scope, PostFactory) {
    $scope.loading = true;
    $scope.posts = PostFactory.find().then(function (posts) {
        $scope.loading = false;
        $scope.posts = posts;
    }, function (msg) {
        alert(msg);
    });
})
