const App = require('../views/js/app.js');

module.exports = function () {
  let app = new App();
  
  app.cart.addProductToCart(app.products[10], 1);
  app.cart.addProductToCart(app.products[11], 2);
  app.cart.addProductToCart(app.products[12], 3);

  this.Given(/^that I have already products in the cart$/, function () {

    assert(app.cart.products.length > 0, 'The product cart does not have products');
  });

  this.When(/^I enter the cart$/, function () {

  });

  this.Then(/^I can see all the products in the cart and their details$/, function () {
    assert(app.cart.products.map( p => p.productInCart).includes(app.products[10]), "The product nr 10 from sortiment-file is not included all properties in the cart");
    assert(app.cart.products.map( p => p.productInCart).includes(app.products[11]), "The product nr 11 from sortiment-file is not included all properties in the cart");
    assert(app.cart.products.map( p => p.productInCart).includes(app.products[12]), "The product nr 12 from sortiment-file is not included all properties in the cart");
    
  });


  this.Then(/^show the total price of products in the cart$/, function () {
    let sum = app.cart.products[0].priceInCart + app.cart.products[1].priceInCart + app.cart.products[2].priceInCart;
    assert(app.cart.totalSumOfProductsCart() == sum, 'TotalSum is not equal sum');
  });

}
