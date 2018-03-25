'use strict';

angular
    .module('myApp').controller('LogoutCtrl', function(authToken, $state){
        authToken.removeToken();
        $state.go('main');
    });
