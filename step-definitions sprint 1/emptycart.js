let App = require('../www/js/app.js');

module.exports = function(){

  let app = new App();
    
  this.Given(/^that there is already one product in the cart$/, function () {
    app.cart.addProductToCart(app.products[0], 1);
    assert(app.cart.products.length > 0, 'The product cart does not have products');
  });
    
  this.When(/^i remove the product from the shopping cart$/, function () {        
      let tmp = app.cart.products.length;
      app.cart.deleteProductFromCart(app.products[0]);
      assert(app.cart.products.length < tmp, "The product is not removed from cart");
  });

  this.Then(/^It should not contain any product$/, function () {
    assert(app.cart.products.length === 0, "The product cart contaons products");
  });

this.Given(/^that there are already several products in the cart$/, function() {
  app.cart.addProductToCart(app.products[0], 1);
  app.cart.addProductToCart(app.products[1], 3);
  app.cart.addProductToCart(app.products[2], 2);
  app.cart.addProductToCart(app.products[3], 3);
    assert(app.cart.products.length > 1, 'The product cart does not have several products');
  });

 this.When(/^i remove all the products from shopping cart button$/, function () {
  app.cart.emptyProductCart();
  });

this.Then(/^It should not contain any products$/, function () {
  assert(app.cart.products.length === 0, 'The product cart contains anyproducts');
});

}
