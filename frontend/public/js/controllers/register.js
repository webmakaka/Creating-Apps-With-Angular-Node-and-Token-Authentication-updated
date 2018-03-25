'use strict';

angular
    .module('myApp').controller('RegisterCtrl', function($scope, $http, alert){
        
        $scope.submit = function(){
            
            const url = 'http://localhost:3000/register';
            const user = {
                name: 'Alex'
            };
            
            $http.post(url, user)
                .then(function(res){
                    alert('success', 'Ok!', 'You are now registered!');
                })
                .catch(function(err){
                    alert('warning', 'Opps!', 'Could not register!');
                });
        };
    });
    
    
