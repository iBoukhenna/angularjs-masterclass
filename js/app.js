var app = angular.module('myApp', []);

app.controller('demoCtrl', function($scope) {

    $scope.count = 0;

    $scope.increaseCount = function () {
        $scope.count++;
    }
})
