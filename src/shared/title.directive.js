angular.module('shoppingcart.shared')
    .directive('prodTitle', [function(){
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, el, attrs, ngModelCtrl){
                console.log(ngModelCtrl);
                ngModelCtrl.$validators.prodTitle = function(val){ 
                    if(!val){
                        return true;    
                    }
                    if(val.startsWith('a') || 
                    val.startsWith('b') || 
                    val.startsWith('c')
                    
                ){
                        return false;
                    }
                    return true;
                };
            }
        }
    }]);