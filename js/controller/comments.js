app.controller('CommentsCtrl', function ($scope, $rootScope, PostFactory, $routeParams, $filter) {

    $rootScope.loading = true;
    $scope.newComment = {};
    
    PostFactory.get($routeParams.id).then(function(post){
        $rootScope.loading = false;
        $scope.title = post.name;
        $scope.comments = post.comments;
        $scope.date = $filter('date')(1288323623006, 'medium');
        $scope.search = {}
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

    $scope.searchFunct = function (value, index, array) {
        if (value.email == "Eliseo@gardner.biz") {
            return true;
        }
        return false;
    }

});
