let App = require('../www/js/app.js');

module.exports = function(){

  let prodQuantity;
  let app = new App();
  
  app.cart.addProductToCart(app.products[0], 5);
  prodQuantity = app.cart.products[0].quantityInCart;

  this.Given(/^the product is already in the shopping cart$/, function () {
    
    assert(app.cart.products.length > 0, 'The product cart does not have products');
  });


  this.When(/^i press the minus button$/, function () {
    app.cart.changeQuantityOfProduct(app.products[0], prodQuantity - 1);
  });

  this.Then(/^it should decrease one product from the cart$/, function () {
    assert(app.cart.products[0].quantityInCart == prodQuantity - 1, 'The products quantity from the cart is not decresed by one');
  });

  
  this.When(/^I press the plus button$/, function () {
    prodCart.changeQuantityOfProduct(app.products[0], prodQuantity + 1);
  });

  this.Then(/^it should increase one product into the cart$/, function () {
    assert(app.cart.products[0].quantityInCart == prodQuantity + 1, 'The products quantity from the cart is not increased by one');
  });

  this.When(/^I increase the quantity for that product by one$/, function () {
    app.cart.changeQuantityOfProduct(app.products[0], prodQuantity + 1);
  });
       

  this.When(/^i decrease the quantity for that product by one$/, function () {
    app.cart.changeQuantityOfProduct(app.products[0], prodQuantity - 1);
  });

  this.When(/^i type into textbox the amount of products$/, function () {
    prodQuantity = 10;
    app.cart.changeQuantityOfProduct(app.products[0], prodQuantity);
  });

      
  this.Then(/^it should add as many products to the cart$/, function () {
    assert(app.cart.products[0].quantityInCart == prodQuantity, 'The products quantity from the cart is not the same');
  });

  this.When(/^i type the number of amount to zero in the shopping cart$/, function () {
    prodQuantity = 0;
    app.cart.changeQuantityOfProduct(app.products[0], prodQuantity); 
  });

  this.Then(/^it should be removed from the cart$/, function () {
       assert(!app.cart.products.includes(app.products[0]), "The product is not removed from the cart");
  });

  this.Given(/^that there is already one product in the shopping cart$/, function () {
    app.cart.emptyProductCart();
    app.cart.addProductToCart(app.products[0], 1);
    prodQuantity = app.cart.products[0].quantityInCart;
    assert(app.cart.products.length == 1, 'The product cart does not have product');
  });

  this.When(/^i decrease the quantity of that product by one$/, function () {
    app.cart.changeQuantityOfProduct(app.products[0], prodQuantity - 1);
  });

  this.Then(/^the product should be removed from the cart$/, function () {
    assert(!app.cart.products.includes(app.products[0]), "The product is not removed from the cart");
  });
}