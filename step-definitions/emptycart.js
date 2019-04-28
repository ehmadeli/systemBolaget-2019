//const App = require('../www/js/app.js');
let Product = require('../www/js/product.js');
let ProductCart = require('../www/js/productcart.js');
let data = require('../www/json/sortiment.json');


module.exports = function(){

  let products = [];
  let prodCart = new ProductCart();
  //let validQuantity = 3;

  for(let t of data){
      let tmp = new Product(t);
      tmp.category.push(tmp.varugrupp);
      tmp.category.push(tmp.varugrupp + ' från ' + tmp.ursprunglandnamn);
      products.push(tmp);
  }
  
  this.Given(/^that there is already one product in the cart$/, function () {
    prodCart.addProductToCart(products[0], 1);
    assert(prodCart.products.length > 0, 'The product cart does not have products');
  });
    
  this.When(/^i remove the product from the shopping cart$/, function () {        
      let tmp = prodCart.products.length;
      prodCart.deleteProductFromCart(products[0]);

      assert(prodCart.products.length < tmp, "The product is not removed from cart");
  });

  this.Then(/^It should not contain any product$/, function () {
    assert(prodCart.products.length === 0, "The product cart contaons products");
  });

this.Given(/^that there are already several products in the cart$/, function() {
    prodCart.addProductToCart(products[0], 1);
    prodCart.addProductToCart(products[1], 3);
    prodCart.addProductToCart(products[2], 2);
    prodCart.addProductToCart(products[3], 3);
    assert(prodCart.products.length > 1, 'The product cart does not have several products');
  });

 this.When(/^i remove all the products from shopping cart button$/, function () {
        prodCart.emptyProductCart();
  });

this.Then(/^It should not contain any products$/, function () {
  assert(prodCart.products.length === 0 && prodCart.price.length === 0 && prodCart.quantity.length === 0 , 'The product cart contains anyproducts');
});

}
