let { $, sleep } = require('./funcs.js');

module.exports = function () {

    this.Given(/^that I am on the web page localhost:(\d+)\/categories\.html$/, async function (portNumber) {
        await helpers.loadPage('http://localhost:' + portNumber + '/categories.html');
        await sleep(1000);
    });
    this.When(/^I click on add button$/, async function () {
        let searchButton = await $('#myInput');
        await searchButton.click();
        await sleep(1000);
        let add = await $('.product_cart');
        assert(add != null, 'Could not find the add button');
        console.log("HOW MANY ???", add.length)
        await add[0].click();
        await sleep(1000);
        let cart = await $('.cart');
        assert(cart != null, 'Could not find the cart button');
        await cart.click();
        await sleep(1000);


        await sleep(3000);




    });
    this.When(/^I add one product to the cart$/, async function () {
        let searchButton = await $('#myInput');
        await searchButton.sendKeys("Renat");
        await searchButton.click();
        let add = await $('.product_button');
        assert(add != null, 'Could not find the add button');
        console.log("HOW MANY", add.length)
        await add.click();
        let cart = await $('.cart');
        assert(cart != null, 'Could not find the cart');
        await cart.click();
        await sleep(1000);
    });

    this.Then(/^I should see the product in the cart$/, async function () {
        let cartItems = await $('.cart');
        cartItems.click();

    });

    this.When(/^I add two products to the cart$/, async function () {
        let searchButton = await $('#myInput');
        await searchButton.click();
        await sleep(1000);
        let add = await $('.product_cart');
        assert(add != null, 'Could not find the product button');
        console.log("HOW MANY ???", add.length)
        await add[0].click();
        let add1 = await $('.product_cart');
        assert(add1 != null, 'Could not find the add button');
        console.log("HOW MANY ???", add.length)
        await add[1].click();

    });
}