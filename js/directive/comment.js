app.directive('ngComment', function () {
    return {
        scope : {
            comment : '=',
            commenta : '@comment',
            select : '&select' 
        },
        restrict: 'E',
        templateUrl: 'partials/_comment.html'
    }
})
