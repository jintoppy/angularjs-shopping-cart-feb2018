angular.module('shoppingcart')
    .decorator('$exceptionHandler', ['$delegate', function($delegate){
        return function(exception, cause){
            console.warn("my custom handler");
            $delegate(exception, cause);
        };
    }]);