'use strict';

angular.module('myApp')
    .factory('authToken', function ($window){
        
        const storage = $window.localStorage;
        const cachedToken;
        
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
    
    
