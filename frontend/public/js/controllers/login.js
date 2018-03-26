'use strict';

angular
    .module('myApp').controller('LoginCtrl', function($scope, $http, API_URL, alert, authToken){
        
        $scope.submit = function(){
            
            const url = API_URL + 'login';
            const user = {
                email: $scope.email,
                password: $scope.password
            };
            
            $http.post(url, user)
                .then(function(res){                    
                    alert('success', 'Welcome', 'Thanks for coming back ' + res.data.email + '!');
                    authToken.setToken(res.data.token);
                })
                .catch(function(err){
                    alert('warning', 'Something went wrong :(', err.message);
                });
        };
        
    });
