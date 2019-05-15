//let Product = require('../views/js/product.js');
let ProductCart = require('../views/js/productcart.js');
let data = require('../views/json/sortiment.json');
const App = require('../views/js/app.js');

module.exports = function () {
  let app;
  let delProduct;

  this.Given(/^that product is already in the shopping cart$/, function () {
    app = new App();
    app.cart.addProductToCart(app.products[0], 1);
    assert(app.cart.products.length > 0, 'The product cart does not have products');
  });

  this.When(/^I click on the remove button in the shopping cart$/, function () {
    delProduct = app.cart.products[0];
    app.cart.deleteProductFromCart(app.products[0]);

    //assert(app.cart.products.length < tmp, "The product is not removed from cart");
  });

  this.Then(/^It should be removed from the shopping cart$/, function () {
    assert(!app.cart.products.includes(delProduct), 'The  product was not deleted from the shoping cart');
    //assert(app.cart.products.length === 0, "The product cart contaons products");
  });


  this.Given(/^that there are two products in the shopping cart$/, function () {
    app.cart.addProductToCart(app.products[0], 1);
    app.cart.addProductToCart(app.products[1], 1);
    assert(app.cart.products.length == 2, 'The product cart does not have two  products');
  });

  this.When(/^I remove the both products from the cart$/, function () {
    app.cart.emptyProductCart();
  });

  this.Then(/^the cart should not contain the products$/, function () {
    assert(app.cart.products.length === 0, 'The product cart contains anyproducts');
  });

}
