var app = angular.module('myApp', []);

app.filter('minutes', function () {
    return function (input) {
        console.log('minutes')
        return Math.floor(input / 60) + " minutes";
    }
})

app.controller('demoCtrl', function($scope, $interval) {

    $scope.count = 0;
    $scope.counts = [0, 0, 0];

    $interval(function () {
        $scope.count+=50;
    }, 1000)

    $scope.increaseCount = function () {
        $scope.count++;
    }
})
