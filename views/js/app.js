let onBackend = typeof module === 'object';

if(onBackend){
    const Product = require('./product.js');
    const Category = require('./category.js');
    const ProductCart = require('./productcart.js');
    global.$ = require('./mockJquery.js');
}


class App {

    constructor() {
        this.loadAllProducts();
        this.loadCategories();
        console.log('kjhgfd');
        


    }

    async loadAllProducts() {
        let data;
        if(onBackend){
            data = require('../json/sortiment.json');
        }
        else {

            data = await $.getJSON('/json/sortiment.json');
        }
        this.products = [];

        for (let t of data) {
            this.products.push(new Product(t));
        }

        // for now assume that there is a function
        // you can reach every called showProducts
        // (this might change)
        showProducts();
    }

    async loadCategories(){
        let data;
        this.cart = new ProductCart();
        if(onBackend){
            data = require('../json/categories.json');
        }
        else {

            data = await $.getJSON('/json/categories.json');
            new productGUI();
            new productCartGUI();
            
        }
        this.categories = new Category(data);
    }

}

if(onBackend){
    module.exports = App;
}