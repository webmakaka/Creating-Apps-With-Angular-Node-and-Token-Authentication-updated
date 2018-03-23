'use strict';

angular
    .module('myApp').config(function($urlRouterProvider, $stateProvider){
        
        $urlRouterProvider.otherwise('/');
        
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'views/main.html'
            })
            
            
            .state('register', {
                url: '/register',
                templateUrl: 'views/register.html',
                controller: 'RegisterCtrl'
            });
    });
