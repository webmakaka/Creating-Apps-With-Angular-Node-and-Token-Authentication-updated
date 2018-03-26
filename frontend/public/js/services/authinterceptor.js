'use strict';

angular.module('myApp')
    .factory('authInterceptor', function (authToken){

        return {
            
            request: function(config){
                const token = authToken.getToken();
                
                if(token){
                    config.headers.Authorization = 'Bearer' + token;
                }
                
                return config;
                
            },
            
            response: function(response){
                return response;
            }
            
        };
        
        
    });
    
    
