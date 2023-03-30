app.directive('ngComment', function () {
    return {
        scope : {
            comment : '=',
            commenta : '@comment'
        },
        restrict: 'E',
        templateUrl: 'partials/_comment.html'
    }
})
