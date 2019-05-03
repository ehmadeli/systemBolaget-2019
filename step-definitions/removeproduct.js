let Product = require('../www/js/product.js');
let ProductCart = require('../www/js/productcart.js');
let data = require('../www/json/sortiment.json');
const App = require('../www/js/app.js');

module.exports = function () {
  let app;
  let prodCart = new ProductCart();
  let delProduct;

  //  for(let t of data){
  //      let tmp = new Product(t);
  //     tmp.category.push(tmp.varugrupp);
  //     tmp.category.push(tmp.varugrupp + ' från ' + tmp.ursprunglandnamn);
  //    products.push(tmp);
  // }

  this.Given(/^that product is already in the shopping cart$/, function () {
    app = new App();
    prodCart.addProductToCart(app.products[0], 1);
    assert(prodCart.products.length > 0, 'The product cart does not have products');
  });

  this.When(/^I click on the remove button in the shopping cart$/, function () {
    delProduct = prodCart.products[0];
    prodCart.deleteProductFromCart(app.products[0]);

    //assert(prodCart.products.length < tmp, "The product is not removed from cart");
  });

  this.Then(/^It should be removed from the shopping cart$/, function () {
    assert(!prodCart.products.includes(delProduct), 'The  product was not deleted from the shoping cart');
    //assert(prodCart.products.length === 0, "The product cart contaons products");
  });


  this.Given(/^that there are two products in the shopping cart$/, function () {
    prodCart.addProductToCart(app.products[0], 1);
    prodCart.addProductToCart(app.products[1], 1);
    assert(prodCart.products.length == 2, 'The product cart does not have two  products');
  });

  this.When(/^I remove the both products from the cart$/, function () {
    prodCart.emptyProductCart();
  });

  this.Then(/^the cart should not contain the products$/, function () {
    assert(prodCart.products.length === 0 && prodCart.price.length === 0 && prodCart.quantity.length === 0, 'The product cart contains anyproducts');
  });

}
