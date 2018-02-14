angular.module('shoppingcart.product')
    .controller('ProductListCtrl', [ 
    function(){
    }])
    .component('productList', {
        templateUrl: 'src/product/components/product-list/product-list.component.html',
        bindings: {
            products: '<'
        },
        controller: 'ProductListCtrl'
    });