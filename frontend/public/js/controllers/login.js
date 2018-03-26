'use strict';

angular
    .module('myApp').controller('LoginCtrl', function($scope, alert, auth){
        
        $scope.submit = function(){
            
            auth.login($scope.email, $scope.password)
                .then(function(res){                    
                    alert('success', 'Welcome', 'Thanks for coming back ' + res.data.email + '!');
                })
                .catch(function(err){
                    alert('warning', 'Something went wrong :(', err.message);
                });
        };
        
    });
