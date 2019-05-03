let Product = require('../www/js/product.js');
let ProductCart = require('../www/js/productcart.js');
let data = require('../www/json/sortiment.json');
const App = require('../www/js/app.js');

module.exports = function () {
  let app = new App();
  //  let products = [];
  let prodCart = new ProductCart();

  //  for(let t of data){
  //      let tmp = new Product(t);
  //      tmp.category.push(tmp.varugrupp);
  //      tmp.category.push(tmp.varugrupp + ' från ' + tmp.ursprunglandnamn);
  //      products.push(tmp);
  //  }
  prodCart.addProductToCart(app.products[10], 1);
  prodCart.addProductToCart(app.products[11], 2);
  prodCart.addProductToCart(app.products[12], 3);

  this.Given(/^that I have already products in the cart$/, function () {

    assert(prodCart.products.length > 0, 'The product cart does not have products');
  });

  this.When(/^I enter the cart$/, function () {

  });

  this.Then(/^I can see all the products in the cart and their details$/, function () {
    assert(prodCart.products.includes(app.products[10]), "The product nr 10 from sortiment-file is not included all properties in the cart");
    assert(prodCart.products.includes(app.products[11]), "The product nr 11 from sortiment-file is not included all properties in the cart");
    assert(prodCart.products.includes(app.products[12]), "The product nr 12 from sortiment-file is not included all properties in the cart");
    console.log(app.products[10].prisinklmoms);
    console.log(app.products[11].prisinklmoms);
    console.log(app.products[12].prisinklmoms);
  });


  this.Then(/^show the total price of products in the cart$/, function () {

    assert(prodCart.totalSumOfProductsCart() == 1517.3, 'TotalSum is not equal 1517.3');
  });

}
