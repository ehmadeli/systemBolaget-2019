let App = require('../views/js/app.js');

module.exports = function () {

    let app = new App();
    let prodQuantity;
    let newProdQuantity;

    this.Given(/^the product is available in the shop$/, async function () {

        await helpers.loadPage('.addtocart' + .addtocart);
    });

    this.Given(/^I type (\d+) into text box$/, async function () {

    });
    this.When(/^i press enter button$/, async function () {


    });

    this.Then(/^it should be added (\d+) unit to the cart of the same product$/, async function () {

    });

    this.Given(/^the product is available in the shop$/, async function () {


    });

    this.Given(/^I type (\d+) or more units in the text box$/, async function () {


    });

    this.When(/^i press enter button$/, async function () {


    });

    this.Then(/^it should be added (\d+) units to the cart of the same product$/, async function () {


    });

    this.Given(/^the different products are available in the shop$/, async function () {


    });

    this.Given(/^I type different units into the text box for different products$/, async function () {

    });

    this.When(/^i press enter button$/, async function () {


    });

    this.Then(/^it should be added different units to the cart of the different products$/, async function () {


    });

}