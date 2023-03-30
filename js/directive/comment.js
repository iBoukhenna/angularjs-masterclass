app.directive('ngComment', function () {
    return {
        scope : {
            comment : '=comment3'
        },
        restrict: 'E',
        templateUrl: 'partials/_comment.html'
    }
})
