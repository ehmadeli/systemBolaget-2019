if (typeof module === 'object') {
    let assert = require('assert');
    let fs = require('fs');
    let Product = require('./product.js');
}

class ProductCart {

    constructor() {
        this.products = [];
        if (window) {
            console.log('loading...');
            let loadedCart = window.localStorage.getItem('productcart');
            if (loadedCart) {
                this.products = JSON.parse(loadedCart);
            }
        }
        //products = [ {productInCart, quantityInCart, priceInCart}, ...]
    }

    addProductToCart(product, quantity) {
        assert(product instanceof Product, product + ' entering is not a Product');
        assert(typeof quantity == 'number', 'The products quantity ' + quantity + ' is not a number');
        assert(quantity > 0, 'The products quantity  is less then 0');
        assert(!this.products.map(p => p.productInCart).includes(product), 'The same product was added to the cart');

        // hmmmm. adding properties to a product poses some problems:
        // 1) we must assume that each user has his own copy of the list of all products
        //    (this might be reasonable if the code is running on frontend, not if it is running on backend)
        // 2) if we remove a product from the cart it is not enough
        //    to just remove it from this.products
        //    you also HAVE to reset/delete the properties priceInCart and quantityInCart
        // 3) Suggestion: Don't DO THIS
        //    In the carts this.products don't store products store objects like this
        //     {product: aProductInstance, quantity: X, rowSum: Y}
        //
        // It is up to you: If you do not want to change according to 3 then make sure to
        // secure your code according to step 2 instead

        this.products.push({
            productInCart: product,
            quantityInCart: quantity,
            priceInCart: quantity * (product.prisinklmoms / 1)
        });

        this.save();
    }

    save() {
        if (window) {
            console.log('saving...');
            window.localStorage.setItem('productcart', JSON.stringify(app.cart.products));
        }
    }

    deleteProductFromCart(product) {
        assert(product instanceof Product, product + ' entering is not a Product');
        //assert(this.products.map(p => p.productInCart).includes(product), 'The  product does not exsist in  the cart');
        this.products.splice(this.products.map(p => p.productInCart).indexOf(product), 1);

        this.save();
    }

    changeQuantityOfProduct(product, newQuantity) {
        assert(product instanceof Product, product + ' entering is not a Product');
        assert(typeof newQuantity == 'number', 'The products new quantity ' + newQuantity + ' is not a number');
        assert(this.products.map(p => p.productInCart).indexOf(product) != -1, 'The product is  in the cart')

        //let index = this.products.findIndex(p => p.productInCart == product);
        let index = this.products.map(p => p.productInCart).indexOf(product);
        this.products[index].priceInCart = newQuantity * product.prisinklmoms / 1;
        this.products[index].quantityInCart = newQuantity;
        if (newQuantity == 0) {
            this.deleteProductFromCart(product);
        }

        this.save();
    }

    emptyProductCart() {
        if (this.products.length > 0) {
            this.products.splice(0, this.products.length);
            this.save();
        }
    }

    totalSumOfProductsCart() {
        return this.products.reduce((a, b) => {
            return a + b.priceInCart;
        }, 0);

    }

    saveProductCart(path = '../../json/productcart.json') {
        fs.writeFileSync(path, JSON.stringify(this, null, 2), (err) => {
            if (err) throw err;
            console.log('The ProductCart file has been saved!');
        });
    }

    readProductCart(path = '../../json/productcart.json') {
        let tmp = JSON.parse(fs.readFileSync(path, 'utf8'));
        Object.assign(this, tmp);
    }
}

if (typeof module === 'object') {
    module.exports = ProductCart;
}



