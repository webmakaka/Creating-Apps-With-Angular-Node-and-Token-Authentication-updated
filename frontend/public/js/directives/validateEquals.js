'use strict';

angular
    .module('myApp').directive('validateEquals', function(){
        
        return {
            require: 'ngModel',
            link: function(scope, element, attrs, ngModelCtrl){
                function validateEqual(value){
                    let valid = (value === scope.$eval(attrs.validateEquals));
                    ngModelCtrl.$setValidity('equal', valid);
                    
                    return valid ? value : undefined;
                }
                
                ngModelCtrl.$parsers.push(validateEqual);
                ngModelCtrl.$formatters.push(validateEqual);
                
                scope.$watch(attrs.validateEqual, function(){
                    ngModelCtrl.$setViewValue(ngModelCtrl.$viewValue);
                });
                
            }
        };
        
    });
    
    
