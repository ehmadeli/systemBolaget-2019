let Product = require('../www/js/product.js');
let ProductCart = require('../www/js/productcart.js');
let data = require('../www/json/sortiment.json');

module.exports = function(){

  let products = [];
  let prodCart = new ProductCart();
  let prodQuantity;
  
  for(let t of data){
      let tmp = new Product(t);
      tmp.category.push(tmp.varugrupp);
      tmp.category.push(tmp.varugrupp + ' från ' + tmp.ursprunglandnamn);
      products.push(tmp);
  }

  prodCart.addProductToCart(products[0], 5);
    prodQuantity = prodCart.quantity[0];

  this.Given(/^the product is already in the shopping cart$/, function () {
    
    assert(prodCart.products.length > 0, 'The product cart does not have products');
  });


  this.When(/^i press the minus button$/, function () {
    prodCart.changeQuantityOfProduct(products[0], prodQuantity - 1);
  });

  this.Then(/^it should decrease one product from the cart$/, function () {
    assert(prodCart.quantity[0] == prodQuantity - 1, 'The products quantity from the cart is not decresed by one');
  });

  
  this.When(/^I press the plus button$/, function () {
    prodCart.changeQuantityOfProduct(products[0], prodQuantity + 1);
  });

  this.Then(/^it should increase one product into the cart$/, function () {
    assert(prodCart.quantity[0] == prodQuantity + 1, 'The products quantity from the cart is not increased by one');
  });

  this.When(/^I increase the quantity for that product by one$/, function () {
    prodCart.changeQuantityOfProduct(products[0], prodQuantity + 1);
  });
       

  this.When(/^i decrease the quantity for that product by one$/, function () {
    prodCart.changeQuantityOfProduct(products[0], prodQuantity - 1);
  });

  this.When(/^i type into textbox the amount of products$/, function () {
    prodQuantity = 10;
    prodCart.changeQuantityOfProduct(products[0], prodQuantity);
  });

      
  this.Then(/^it should add as many products to the cart$/, function () {
    assert(prodCart.quantity[0] == prodQuantity, 'The products quantity from the cart is not the same');
  });

  this.When(/^i type the number of amount to zero in the shopping cart$/, function () {
    prodQuantity = 0;
    prodCart.changeQuantityOfProduct(products[0], prodQuantity); 
  });

  this.Then(/^it should be removed from the cart$/, function () {
       assert(!prodCart.products.includes(products[0].namn), "The product is not removed from the cart");
  });

  this.Given(/^that there is already one product in the shopping cart$/, function () {
    prodCart.emptyProductCart();
    prodCart.addProductToCart(products[0], 1);
    prodQuantity = prodCart.quantity[0];
    assert(prodCart.products.length == 1, 'The product cart does not have product');
  });

  this.When(/^i decrease the quantity of that product by one$/, function () {
    prodCart.changeQuantityOfProduct(products[0], prodQuantity - 1);
  });

  this.Then(/^the product should be removed from the cart$/, function () {
    assert(!prodCart.products.includes(products[0].namn), "The product is not removed from the cart");
  });
}