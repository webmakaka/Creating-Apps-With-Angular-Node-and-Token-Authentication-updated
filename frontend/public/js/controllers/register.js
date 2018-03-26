'use strict';

angular
    .module('myApp').controller('RegisterCtrl', function($scope, $http, alert, authToken, API_URL){
        
        $scope.submit = function(){
            
            const url = API_URL + 'register';
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
                    alert('warning', 'Something went wrong :(', err.message);
                });
        };
    });
    
    
