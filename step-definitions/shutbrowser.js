let App = require('../views/js/app.js');
let ProductCart = require('../views/js/productcart.js');

module.exports = function(){

  let oldCart;  
  let newCart = new ProductCart();
  let app = new App();
    
  app.cart.addProductToCart(app.products[0], 1);
    app.cart.addProductToCart(app.products[1], 2);
    app.cart.addProductToCart(app.products[5], 6);
    app.cart.addProductToCart(app.products[10], 3);
  
  this.Given(/^that I already have products in my cart$/, function () {
    assert(app.cart.products.length > 0, 'The product cart does not have products');
  });
    
  this.When(/^I close my browser$/, {timeout: 30000}, function () {  
    oldCart = Object.assign(app.cart);  
    oldCart.saveProductCart('../systemBolaget-2019/www/json/productcart.json');
    
  });

  this.When(/^I reopen my browser$/, {timeout: 30000}, function () {
    newCart.readProductCart('../systemBolaget-2019/www/json/productcart.json');
   });

  this.Then(/^I should get the same shopping cart as previous$/, {timeout: 30000}, function () {  
    
    assert(JSON.stringify(oldCart) === JSON.stringify(newCart), "The product carts  is not the same");
});


this.When(/^I refresh my browser$/, function () {
  // Test 
  
  });

  this.Then(/^I should get the same shopping cart as previous one$/, function () {
       
  });

}
