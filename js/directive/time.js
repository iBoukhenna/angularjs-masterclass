app.directive('ngTime', function (dateFilter) {
    return {
        scope : {},
        restrict: 'E',
        template: '{{time}}',
        link: function (scope, element, attrs) {
            scope.time = dateFilter(new Date(), 'hh:mm:ss');
        }
    }
})
