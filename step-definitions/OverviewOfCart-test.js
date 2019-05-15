const App = require('../views/js/app.js');

module.exports = function () {
  let app = new App();

  this.Given(/^that I already have products in the cart$/, async function () {

    await helpers.loadPage('.addtocart' + addtocart);
  });

  this.When(/^I click on cart\-button$/, async function () {



    this.Then(/^I can see all the products in the cart and their details$/, async function () {


    });

    this.Given(/^that I already have products in the cart$/, async function () {


    });

    this.When(/^I click on cart\-button$/, async function () {

      let cartButton = await $('.header.cart');
      assert.notEqual(cartButton, null, 'could not find the cart button');
      await cartButton.click();

    });
    this.Then(/^I can see the total price of products in the cart$/, async function () {


    });
    this.Given(/^that I already have products in the cart$/, async function () {


    });
    this.When(/^I change the quantities of the products$/, async function () {


    });
    this.Then(/^I can see new total price of products in the cart$/, async function () {


    });

  });


}