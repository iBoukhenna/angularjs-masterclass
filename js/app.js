var app = angular.module('myApp', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {templateUrl: 'partials/home.html', controller: 'PostsCtrl'})
    .when('/comments/:id', {templateUrl: 'partials/comments.html', controller: 'CommentsCtrl'})
    .otherwise({redirectTo: '/'})
});
app.filter('round', function () {
    return function(input, accuracy) {
        return (Math.round(input * Math.pow(10, accuracy)) / Math.pow(10, accuracy)).toString().replace('.',',');
    }
})