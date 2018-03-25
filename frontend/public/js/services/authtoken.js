'use strict';

angular.module('myApp')
    .factory('authToken', function ($window){
        
        let storage = $window.localStorage;
        let cachedToken;
        
        return {
            setToken: function(token){
                cachedToken = token;
                storage.setItem('userToken', token);
            },
            getToken: function(){
                if(!cachedToken){
                    cachedToken = storage.getItem('userToken');
                }                
                return cachedToken;
            },
            isAuthenticated: function(){
                return !!this.getToken();
            }
        };
    });
