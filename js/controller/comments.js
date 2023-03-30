app.controller('CommentsCtrl', function ($scope, $rootScope, PostFactory, $routeParams) {

    $rootScope.loading = true;
    $scope.newComment = {};
    
    PostFactory.get($routeParams.id).then(function(post){
        $rootScope.loading = false;
        $scope.title = post.name;
        $scope.comments = post.comments;
        $scope.date = 1288323623006;
    }, function(msg) {
        alert(msg);
    });

    $scope.addComment = function() {
        $scope.comments.push($scope.newComment);
        PostFactory.add($scope.newComment).then(function () {

        }, function () {
            alert("Votre message n'a pas pu être sauvgardé");
        });
        $scope.newComment = {};
    }

});
