'use strict';

angular
    .module('myApp').controller('HeaderCtrl', function($scope, authToken){
        $scope.isAuthenticated = authToken.isAuthenticated();
    });
