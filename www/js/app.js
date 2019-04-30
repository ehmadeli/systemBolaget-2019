const Product = require('./product.js');
const ProductCart = require('./productcart.js');
let data = require('../json/sortiment.json');

module.exports = class App {

    constructor(){
        this.loadAllProducts();
        this.cart = new ProductCart();
    }

    loadAllProducts(){
        this.products = [];
        for(let t of data){
            this.products.push(new Product(t));
        }


    }


}