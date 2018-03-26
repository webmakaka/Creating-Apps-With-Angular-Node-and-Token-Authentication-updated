'use strict';

angular.module('myApp')
    .factory('authInterceptor', function (authToken){

        return {
            
            request: function(config){
                const token = authToken.getToken();
                
                if(token){
                    config.headers.Authorization = '!!!!!!!!!! ' + token;
                }
                
                return config;
                
            },
            
            response: function(response){
                return response;
            }
            
        };
        
        
    });
    
    
