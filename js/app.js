var app = angular.module('myApp', []);

app.controller('demoCtrl', function($scope) {

    $scope.count = 0;

    window.setInterval(function () {
        $scope.count++;
        $scope.$apply();
    }, 1000)

    $scope.increaseCount = function () {
        $scope.count++;
    }
})
