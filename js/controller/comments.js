app.controller('CommentsCtrl', function ($scope, PostFactory, $routeParams) {
    $scope.loading = true;
    var post = PostFactory.getPost($routeParams.id).then(function(post){
        $scope.loading = false;
        $scope.title = post.name;
        $scope.comments = post.comments;
    }, function(msg) {
        alert(msg);
    });
})
