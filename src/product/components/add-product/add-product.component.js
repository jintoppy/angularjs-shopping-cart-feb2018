angular.module('shoppingcart.product')
    .controller('AddProductCtrl', ['ProductService', 
    function(ProductService){
        this.newProduct = {};

        this.onFormSubmit = function(e){
            e.preventDefault();
            console.log(this.newProduct);
            ProductService.addProduct(this.newProduct).then(function(){
                alert('added successfully');
            });
        };
    }])
    .component('addProduct', {
        templateUrl: 'src/product/components/add-product/add-product.component.html',
        controller:'AddProductCtrl'
    });