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
        assert(!this.products.includes(product), 'The same product was added to the cart');
        assert(typeof quantity == 'number', 'The products quantity ' + quantity + ' is not a number');
        assert(quantity > 0, 'The products quantity  is less then 0');

        this.products.push(product); 
        this.quantity.push(quantity);
        this.price.push(quantity * product.prisinklmoms / 1);

    }

    deleteProductFromCart(product) {
        assert(product instanceof Product, product + ' entering is not a Product');
        assert(this.products.includes(product), 'The  product does not exsist in  the cart');
        
        this.products.splice(this.products.indexOf(product), 1);
        this.quantity.splice(this.products.indexOf(product), 1);
        this.price.splice(this.products.indexOf(product), 1);
    }

    changeQuantityOfProduct(product, newQuantity) {
        assert(product instanceof Product, product + ' entering is not a Product');
        assert(typeof newQuantity == 'number', 'The products new quantity ' + newQuantity + ' is not a number');

        let index = this.products.indexOf(product);
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

    saveProductCart(path = '../../json/productcart.json') {
        fs.writeFileSync(path, JSON.stringify(this, null, 2), (err) => {
            if (err)  throw err;
            console.log('The ProductCart file has been saved!');
        });
    }

     readProductCart(path = '../../json/productcart.json') {
                   
         let tmp = JSON.parse(fs.readFileSync(path, 'utf8'));
         Object.assign(this,tmp);
     }
 }

if (typeof module === 'object') {
    module.exports = ProductCart;
}



