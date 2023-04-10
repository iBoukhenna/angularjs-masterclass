var app = angular.module('myApp', []);

app.controller('demoCtrl', function($scope, $interval) {

    $scope.count = 0;
    $scope.counts = [0, 0, 0];

    $interval(function () {
        $scope.count++;
    }, 1000)

    $scope.$watch('count',function (value) {
        console.log('value=', value);
    })

    $scope.increaseCount = function () {
        $scope.count++;
    }
})
