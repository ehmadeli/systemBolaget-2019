let assert = require('assert');
let fs = require('fs');
let Product = require('./product.js');

class ProductCart {
    
    constructor() {
        this.products = [];
        this.quantity = [];
        this.price = [];
    }

    addProductToCart(product, quantity) {
        assert(product instanceof Product, product + ' entering is not a Product');

        assert(typeof quantity == 'number', 'The products quantity ' + quantity + ' is not a number');
        assert(quantity > 0, 'The products quantity  is less then 0');

        // do not use three different arrays
        this.products.push(product.namn); // why not push the whole product
        this.quantity.push(quantity);
        this.price.push(quantity * product.prisinklmoms / 1);

    }

    deleteProductFromCart(product) {
        assert(product instanceof Product, product + ' entering is not a Product');

        //console.log(">>>== " + product + " ** " + product.namn); //For test only

        this.products.splice(this.products.indexOf(product.namn), 1);
        this.quantity.splice(this.products.indexOf(product.namn), 1);
        this.price.splice(this.products.indexOf(product.namn), 1);
    }

    changeQuantityOfProduct(product, newQuantity) {
        assert(product instanceof Product, product + ' entering is not a Product');
        assert(typeof newQuantity == 'number', 'The products new quantity ' + newQuantity + ' is not a number');

        let index = this.products.indexOf(product.namn);
        if(index != -1){
            this.quantity[index] = newQuantity;
            this.price[index] = newQuantity * product.prisinklmoms / 1;
            if (newQuantity == 0) {
                this.deleteProductFromCart(product);
            }
        }
    }

    emptyProductCart() {
        if (this.products.length > 0) {
            this.products.splice(0, this.products.length);
            this.quantity.splice(0, this.quantity.length);
            this.price.splice(0, this.price.length);
        }
    }

    totalSumOfProductsCart() {
        return this.price.reduce(function (a, b) {
            return a + b;
        }, 0);
    }

    saveProductCart() {
        fs.writeFile('../../json/productcart.json', JSON.stringify(this, null, 2), (err) => {
            if (err) throw err;
            console.log('The ProductCart file has been saved!');
            return true;
        });
    }

    readProductCart() {
        fs.readFile('../../json/productcart.json', (err, data) => {
            if (err) throw err;
            let cart = JSON.parse(data);
            this.products = cart.products;
            this.quantity = cart.quantity;
            this.price = cart.price;
            console.log('The ProductCart file has been read!');
            console.log(this); // Test Only
            return true;
        });
    }

}

if (typeof module === 'object') {
    module.exports = ProductCart;
}



