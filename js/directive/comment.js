app.directive('ngComment', function () {
    return {
        template: '<p><strong>{{comment.username | uppercase}}</strong><br>{{comment.content}}</p><hr>'
    }
})
