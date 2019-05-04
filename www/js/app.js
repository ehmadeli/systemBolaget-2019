const Product = require('./product.js');
const Category = require('./category.js');
const ProductCart = require('./productcart.js');
let data = require('../json/sortiment.json');
let data2 = require('../json/categories.json');

module.exports = class App {

    constructor() {
        this.loadAllProducts();
        this.cart = new ProductCart();
        this.categories = new Category(data2);
    }

    loadAllProducts() {
        this.products = [];

        for (let t of data) {
            this.products.push(new Product(t));
        }

    }


}