'use strict';

angular.module('myApp')
    .service('auth', function auth($http, API_URL, authToken, $state){
        
        const url = API_URL + 'login';
        
        this.login = function(email, password){
            
            console.log(email);
            console.log(password);
            
            return $http.post(url, {
                email,
                password
            })
            .then(function(res){                
                authToken.setToken(res.data.token);
                $state.go('main');
                
                return res;
            });
        };
        
    });
