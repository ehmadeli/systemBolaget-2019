let App = require('../www/js/app.js');

module.exports = function(){

let app = new App();
let prodQuantity;
let newProdQuantity;
  
this.Given(/^the product is available in the shop$/, function () {
    assert(app.products.length > 0, "The products list  is not available in the shop")
});

this.When(/^I add (\d+) unit of the product to the cart$/, function (number) {
    prodQuantity = number / 1;
    app.cart.addProductToCart(app.products[0], prodQuantity);
    assert(app.cart.products.length == prodQuantity, 'The product is not added to the cart');
});

this.Then(/^it should be added 1 unit to the cart$/, function () {
    assert(app.cart.products.length == prodQuantity, 'The product is not added to the cart');
});

this.When(/^I add (\d+) units of the product to the cart$/, function (number) {
    if(number / 1 != 0){
        newProdQuantity = prodQuantity + number / 1;
        app.cart.changeQuantityOfProduct(app.products[0], newProdQuantity );
    } else {
        newProdQuantity = number / 1;
        app.cart.changeQuantityOfProduct(app.products[0], newProdQuantity );
    }
});


this.Then(/^it should be added (\d+) units to the cart$/, function (number) {
    number = number / 1 + 1;
    assert(app.cart.products[0].quantityInCart == number, 'The product quantity is not added to the cart');
});

this.Then(/^it should not be added to the cart$/, function () {
    assert(!app.cart.products.includes(app.products[0]), "The product with zero quanyity  is added to  the cart");
});

}