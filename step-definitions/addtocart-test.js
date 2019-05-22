let { $, sleep } = require('./funcs.js');

module.exports = function () {

    this.Given(/^that the products are available in the store$/, async function () {
        await helpers.loadPage('http://localhost:' + portnumber + '/categories.html')

    });

    this.When(/^I click on add\-to button$/, async function () {
        let add = await $('.product_cart');
        add = add[0] || add;
        await add.click();
        await(1000);
    });

    this.Then(/^I should see the product in the cart$/, async function () {
        this. product= await $('.product_name');
        let cartItems = await $('.cart');
        assert((await cartItems.getText()).includes(this.product), "The product is Auld ");

    });

    this.When(/^I click on add\-to button (\d+) times$/, async function () {
        let add = await $('product_cart ');
        await add.click();

    });

    this.Then(/^this different product should be added to the cart$/, async function () {
        let cartItems = await $('.');
        this. firstproduct= await $('.product_name');
        assert((await cartItems[0].getText()).includes(firstproduct), "The cart do not contain 2 products");
        this. secondproduct= await $('#productName');
        cartItems = await $('.');
        assert((await cartItems[1].getText()).includes(secondproduct), "The cart do not contain 2 products");
    });



    




}