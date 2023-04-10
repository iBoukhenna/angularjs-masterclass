var app = angular.module('myApp', []);

app.controller('demoCtrl', function($scope, $interval) {

    $scope.count = 0;

    $interval(function () {
        $scope.count++;
    }, 1000)

    $scope.increaseCount = function () {
        $scope.count++;
    }
})
