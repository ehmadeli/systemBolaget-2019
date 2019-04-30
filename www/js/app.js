const Product = require('./product.js');
const ProductCart = require('./productcart.js');

module.exports = class App {

    constructor(){
        this.loadAllProducts();
        this.cart = new ProductCart();
    }

    loadAllProducts(){
        this.products = [];
        let temp = require('./sortiment.json');
        for(let t of temp){
            this.products.push(new Product(t));
        }
    }


}