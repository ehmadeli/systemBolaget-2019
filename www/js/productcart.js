let assert = require('assert');
let fs = require('fs');
let Product = require('./product.js');

class ProductCart {
    
    constructor() {
        this.products = [];
        this.prodnr = [];
        this.quantity = [];
        this.price = [];
    }

    addProductToCart(product, quantity) {
        assert(product instanceof Product, product + ' entering is not a Product');
        assert(!this.prodnr.includes(product.varnummer), 'The same product was added to the cart');
        assert(typeof quantity == 'number', 'The products quantity ' + quantity + ' is not a number');
        assert(quantity > 0, 'The products quantity  is less then 0');

        // do not use three different arrays
        this.products.push(product.namn); // why not push the whole product
        this.prodnr.push(product.varnummer);
        this.quantity.push(quantity);
        this.price.push(quantity * product.prisinklmoms / 1);

    }

    deleteProductFromCart(product) {
        assert(product instanceof Product, product + ' entering is not a Product');

        //console.log(">>>== " + product + " ** " + product.namn); //For test only

        this.products.splice(this.products.indexOf(product.namn), 1);
        this.prodnr.splice(this.products.indexOf(product.namn), 1);
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
            this.prodnr.splice(0, this.prodnr.length);
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
            //return true;
        });
    }

     readProductCart(path = '../../json/productcart.json') {
        let tmp = JSON.parse(fs.readFileSync(path, 'utf8'));
        //console.log(">>== ");
        //console.log(tmp);
        Object.assign(this,tmp);
     }
 }

if (typeof module === 'object') {
    module.exports = ProductCart;
}



