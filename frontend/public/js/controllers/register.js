'use strict';

angular
    .module('myApp').controller('RegisterCtrl', function($scope, alert, auth){
        
        $scope.submit = function(){
            
            auth.register($scope.email, $scope.password)
                .then(function(res){                    
                    alert('success', 'Account Created!', 'Welcome, ' + res.data.email + '!');
                })
                .catch(function(err){
                    alert('warning', 'Something went wrong :(', err.message);
                });
        };
    });
    
    
