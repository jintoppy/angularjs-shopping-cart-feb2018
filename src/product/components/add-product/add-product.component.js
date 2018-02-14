angular.module('shoppingcart.product')
    .controller('AddProductCtrl', [function(){
        this.newProduct = {};
    }])
    .component('addProduct', {
        templateUrl: 'src/product/components/add-product/add-product.component.html',
        controller:'AddProductCtrl'
    });