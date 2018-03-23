'use strict';

angular.module('myApp')
    .service('alert', function alert($rootScope, $timeout){
        
        let alertTimeout;
        
        return function (type, title, message, timeout){
            
            $rootScope.alert = {
                hasBeenShown: true,
                show: true,
                type,
                message,
                title
            };
            
            $timeout.cancel(alertTimeout);
            alertTimeout = $timeout(function(){
                $rootScope.alert.show = false;
            }, timeout || 2000);
        };
    });
    
    
