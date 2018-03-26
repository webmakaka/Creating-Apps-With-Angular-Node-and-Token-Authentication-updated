'use strict';

angular.module('myApp')
    .service('auth', function auth($http, API_URL, authToken){
        
        const url = API_URL + 'login';
        const user = {
            email: $scope.email,
            password: $scope.password
        };
        
        this.login = function(email, password){
            return $http.post(url,{
                email,
                password
            })
            .then(function(res){
                authToken.setToken(res.data.token);
            });
        };
        
    });
