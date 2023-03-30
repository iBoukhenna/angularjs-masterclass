app.directive('ngTime', function (dateFilter, $interval) {
    return {
        scope : {},
        restrict: 'E',
        template: '{{time}}',
        link: function (scope, element, attrs) {
            scope.time = dateFilter(new Date(), 'hh:mm:ss');

            interval = $interval(function () {
                scope.time = dateFilter(new Date(), 'hh:mm:ss');
                console.log('time change')
            }, 1000)
        }
    }
})
