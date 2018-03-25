'use strict';

angular
    .module('myApp').controller('RegisterCtrl', function($scope, $http, alert, authToken){
        
        $scope.submit = function(){
            
            const url = 'http://localhost:3000/register';
            const user = {
                email: $scope.email,
                password: $scope.password
            };
            
            $http.post(url, user)
                .then(function(res){                    
                    alert('success', 'Account Created!', 'Welcome, ' + res.data.email + '!');
                    authToken.setToken(res.data.token);
                })
                .catch(function(err){
                    alert('warning', 'Opps!', 'Could not register!');
                });
        };
    });
    
    
