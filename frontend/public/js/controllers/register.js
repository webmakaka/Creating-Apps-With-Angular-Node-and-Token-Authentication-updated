'use strict';

angular
    .module('myApp').controller('RegisterCtrl', function($scope, $http){
        
        $scope.submit = function(){
            
            const url = '/';
            const user = {};
            
            $http.post(url, user)
                .then(function(res){
                    console.log("good");
                })
                .catch(function(err){
                    console.log("bad");
                });
        }
    });
    
    
