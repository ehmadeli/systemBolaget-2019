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






//   this.Given(/^that there are at least (\d+) coffees left in the machine$/, function (numberOfCups){
//      machineInitialAmountsOfCups = numberOfCups;
//      machine = new CoffeeMachine(numberOfCups / 1);
//      assert.equal(numberOfCups, machine.coffeeLeft, 'The machine was not created with requested amount of coffee');
//   });

//   this.When(/^I insert (\d+) dollar$/,  function (amountOfMoney) {
    
//     machine.insertMoney(amountOfMoney / 1);
//     assert.equal(amountOfMoney, machine.insertedMoney, 'The inserted money could not be found inside the machine...')
//     //assert.equal(1, dollars /1, 'For now keep 1 dollar in the Gherkin scenario - because that is all the GUI can handle');
//   });


//   this.When(/^press the start button$/, function () {
//     machine.pressStart();
//   });

//   this.Then(/^I should get one cup of coffee$/, function () {
//     assert.equal(machine.output, '1 cup of coffee', 'We did not get a cup of coffee');
//   });




}
