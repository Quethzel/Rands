var App = angular.module('randsApp', [
    'ngRoute',
    'ui.router',
    'ngSanitize'
]);

App.config(function($stateProvider, $urlRouterProvider, $routeProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'app/views/home.html',
            controller: 'homeController'
        })
        .state('promote', {
            url: '/promote',
            templateUrl: 'app/views/promote.html',
            controller: 'promoteCtrl'
        })        
        .state('about', {
            url: '/about',
            templateUrl: 'app/views/about.html',
            controller: 'aboutCtrl'
        })

    $urlRouterProvider.otherwise('/home');

});

// App.run(function($state, $rootScope){
//    $rootScope.$state = $state;
// });

App.controller('homeController', function ($scope, $rootScope, $routeParams, $location, $state) {
    // $scope.$on('$locationChangeStart', function(event) {
    //     $scope.showMenu = ($location.path() != "/exam") ? true : false;
    // });
    console.log("home");  
});


App.controller('promoteCtrl', function($scope, $state) {
    console.log('promote controller');
});


App.controller('aboutCtrl', function($scope, $state) {    
    $scope.version = {
        system: "1.2.1",
        database: "4.0.0 firedb",
        date: "07.06.2017 11:53 p.m."
    };
    console.log($scope.version);
});