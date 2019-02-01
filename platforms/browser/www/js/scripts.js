var app = new Framework7 ({
    root: '#app',

    routes : [
        {
            path: '/',
            url: 'index.html'
        },

        {
            path: '/timer/',
            url: 'pages/timer.html',
        }
    ]
})

var mainView = app.views.create('.view-main');