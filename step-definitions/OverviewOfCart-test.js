const App = require('../views/js/app.js');

module.exports = function () {
  let app = new App();
  
  this.Given(/^that I already have products in the cart$/, function () {
    // Write code here that turns the phrase above into concrete actions

  });

  this.When(/^I click on cart\-button$/, function () {
    // Write code here that turns the phrase above into concrete actions


    this.Then(/^I can see all the products in the cart and their details$/, function () {
      // Write code here that turns the phrase above into concrete actions

    });

    this.Given(/^that I already have products in the cart$/, function () {
      // Write code here that turns the phrase above into concrete actions

    });

    this.When(/^I click on cart\-button$/, function () {
      // Write code here that turns the phrase above into concrete actions

    });
    this.Then(/^I can see the total price of products in the cart$/, function () {
      // Write code here that turns the phrase above into concrete actions

    });
    this.Given(/^that I already have products in the cart$/, function () {
      // Write code here that turns the phrase above into concrete actions

    });
    this.When(/^I change the quantities of the products$/, function () {
      // Write code here that turns the phrase above into concrete actions

    });
    this.Then(/^I can see new total price of products in the cart$/, function () {
      // Write code here that turns the phrase above into concrete actions

    });

  });


}