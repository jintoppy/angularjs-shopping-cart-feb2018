angular.module('shoppingcart')
    .factory('ErrorInterceptor', ['$q', function($q){

        return {            
            responseError:function(err){
                console.log('within error');
                return $q.reject(err);
            }
        };
    }])
    .factory('FunInterceptor', ['$q', function($q){

        return {            
            request:function(config){
                config.headers.hello = "asdf";
                return config;
            },
            response: function(res){
                return $q.when(res);
            },
            responseError: function(res){
                return $q.reject(res)
            }
        };
    }])
    .config(['$httpProvider', function($httpProvider){
        $httpProvider.interceptors.push('ErrorInterceptor');
        $httpProvider.interceptors.push('FunInterceptor');
    }]);