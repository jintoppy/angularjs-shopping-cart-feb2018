angular.module('shoppingcart.product')
    .service('ProductService', ['$http', 'AppConstant',
     function($http, AppConstant){

        this.getProducts = function(){
            return $http
                        .get(AppConstant.urls.product)
                        .then(function(res){
                            return res.data;
                        }, function(){
                            alert('some error happened');
                        });
        };

        this.addProduct = function(){
            
            
        };

        this.getProductDetails = function(productId){
            return $http
                        .get(AppConstant.urls.product + '/' + productId)
                        .then(function(res){
                            return res.data;
                        }, function(){
                            alert('some error happened');
                        });
        };

    }]);
    
