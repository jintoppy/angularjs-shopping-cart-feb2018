angular.module('shoppingcart.shared')
    .directive('myFirst', [function(){

        return {
            restrict: 'EA',
            templateUrl: 'src/shared/myfirst.directive.html',
            scope: {
                myTitle: '@',
                myAppName: '='
            },
            require: 'ngModel',
            link: function(scope, element, attributes, ngModelCtrl){

            }
        };

    }]);