angular.module('shoppingcart', [
    'ui.router',
    'shoppingcart.shared',
    'shoppingcart.product',
    'shoppingcart.cart' 
]);

angular.module('shoppingcart')
    .config(['$stateProvider', '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider){
        $stateProvider.state({
            name: 'home',
            url: '/',
            component: 'productList',
            resolve: {
                products: ['ProductService', function(ProductService){
                    return ProductService
                            .getProducts();
                }]
            }
        });

        $stateProvider.state({
            name: 'addProduct',
            url: '/add-product',
            component: 'addProduct'
        });

        $stateProvider.state({
            name: 'showProductInfo',
            url: '/product-details/{productId}',
            component: 'productDetails',
            resolve: {
                product: ['ProductService', '$transition$', 
                function(ProductService, $transition$){
                    var params = $transition$.params();
                    var productId = params.productId;
                    return ProductService.getProductDetails(productId);
                }]
            }
        });

        $stateProvider.state({
            name: 'cart',
            url: '/cart',
            component: 'cart'
        });

        $urlRouterProvider.otherwise('/');

    }]);