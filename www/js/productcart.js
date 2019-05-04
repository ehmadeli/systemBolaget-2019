let assert = require('assert');
let fs = require('fs');
let Product = require('./product.js');

class ProductCart {
    
    constructor() {
        this.products = [];
    }

    addProductToCart(product, quantity) {
        assert(product instanceof Product, product + ' entering is not a Product');
        assert(!this.products.includes(product), 'The same product was added to the cart');
        assert(typeof quantity == 'number', 'The products quantity ' + quantity + ' is not a number');
        assert(quantity > 0, 'The products quantity  is less then 0');

        product.priceInCart = quantity * product.prisinklmoms / 1;
        product.quantityInCart = quantity;
        this.products.push(product); 
        
    }

    deleteProductFromCart(product) {
        assert(product instanceof Product, product + ' entering is not a Product');
        assert(this.products.includes(product), 'The  product does not exsist in  the cart');
        
        this.products.splice(this.products.indexOf(product), 1);
    }

    changeQuantityOfProduct(product, newQuantity) {
        assert(product instanceof Product, product + ' entering is not a Product');
        assert(typeof newQuantity == 'number', 'The products new quantity ' + newQuantity + ' is not a number');
        assert(this.products.indexOf(product) != -1, 'The product is  in the cart')

        let index = this.products.indexOf(product);
        this.products[index].priceInCart = newQuantity * product.prisinklmoms / 1;
        this.products[index].quantityInCart = newQuantity;
        if (newQuantity == 0) {
            this.deleteProductFromCart(product);
        }
    }

    emptyProductCart() {
        if (this.products.length > 0) {
            this.products.splice(0, this.products.length);
        }
    }

    totalSumOfProductsCart() {
        return  this.products.reduce((a, b) => {
                return a + b.priceInCart;
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



