var App = angular.module('randsApp', [
    'ngRoute',
    'ui.router',
    'ngSanitize'
]);

App.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'app/views/home.html',
            controller: 'homeController'
        })
        .state('promote', {
            url: '/promote',
            // abstract: true,
            templateUrl: 'app/views/promote.html'
        })
        .state('promote.reader', {
            url:'/reader/:id',
            views: {
                'reader': {
                    templateUrl: 'app/views/reader.html',
                    controller: 'readerController'
                }
            }
        })
       .state('promote.sharer', {
           url: '/sharer',
           views: {
                'sharer': {
                    templateUrl: 'app/views/sharer.html',
                    controller: 'sharerController'
                }
           }
       })
        .state('about', {
            url: '/about',
            templateUrl: 'app/views/about.html',
            controller: 'aboutController'
        })

    $urlRouterProvider.otherwise('/home');

});

App.run(function() {
    fireJs.db.init();

});

App.controller('aboutController', function($scope) { 
    $scope.version = {
        system: "1.0.1",
        database: "4.0.0",
        date: "14.06.2018 10:59 p.m."
    };
});
