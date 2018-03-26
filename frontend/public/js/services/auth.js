'use strict';

angular.module('myApp')
    .service('auth', function auth($http, API_URL, authToken, $state){
        
        const LOGIN_URL = API_URL + 'login';
        const REGISTER_URL = API_URL + 'register';
        
        function authSuccessful(res){
            authToken.setToken(res.data.token);
            $state.go('main');
            
            return res;
        }
        
        this.login = function(email, password){
            return $http.post(LOGIN_URL, {
                email,
                password
            })
            .then(authSuccessful);
        };
        
        this.register = function(email, password){
            return $http.post(REGISTER_URL, {
                email,
                password
            }).then(authSuccessful);
        };
    });
