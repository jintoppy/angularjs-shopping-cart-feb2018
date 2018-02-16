angular.module('shoppingcart.product')
    .service('ProductService', ['$http', 'AppConstant',
     function($http, AppConstant){

        this.getProducts = function(){
            return $http
                        .get(AppConstant.urls.product + 'andomethons')
                        .then(function(res){
                            return res.data;
                        });
        };

        this.addProduct = function(newProductInfo){
            return $http.post(AppConstant.urls.product, newProductInfo);
            
        };

        this.searchProduct = function(title) {
            return $http
                    .get(AppConstant.urls.product + '?title=' + title)
                    .then(function(res){
                        return res.data
                    });
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
    
