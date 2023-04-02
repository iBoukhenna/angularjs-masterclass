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

app.directive('datepicker', function () {
    return {
        restrict : 'C',
        scope : {
            options : '=datepickerOptions',
        },
        link : function (scope, element, attrs) {
            $(element).pickadate(scope.options);
        }
    }
})

app.directive('ngTest', function () {
    return {
        template : '<div>Hello <strong>{{username}}</strong></div>',
        restrict : 'A',
        scope : {
            username : '='
        }
    }
})

