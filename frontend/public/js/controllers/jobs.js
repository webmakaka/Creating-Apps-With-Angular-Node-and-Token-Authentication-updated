'use strict';

angular
    .module('myApp').controller('JobsCtrl', function($scope, $http, API_URL, alert){
        
        $http.get(API_URL + 'jobs')
            .then(function(jobs){                
                $scope.jobs = jobs.data;
            })
            .catch(function(err){
                alert('warning', 'Uname to get jobs', err.message);
            });
    });
