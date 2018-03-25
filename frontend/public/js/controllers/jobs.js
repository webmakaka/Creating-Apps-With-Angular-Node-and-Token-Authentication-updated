'use strict';

angular
    .module('myApp').controller('JobsCtrl', function($scope){
        $scope.jobs = [
          'HTML5 Boilerplate',
          'AngularJS',
          'Karma'
      ];
    });
