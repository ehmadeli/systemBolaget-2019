let { $, sleep } = require('./funcs.js');

module.exports = function () {

    this.Given(/^that I am on the web page localhost:(\d+)\/categories\.html$/, async function (portNumber) {
        await helpers.loadPage('http://localhost:' + portNumber + '/categories.html');
        await sleep(1000);
    });

    this.When(/^I click on add button$/, async function () {
        //let search = await $('#header_search_form');
        let searchButton = await $('#myInput');
        await searchButton.sendKeys("renat");
        await sleep(3000);
     
        await searchButton.click();
        await sleep(3000);
        //let add = await$('.menu_search');
        let pr = (await $('.product_cart'))[0];
        await pr.click();
        // if (add.length > 0) {
        //     add = add[0];
        // }
        
        await sleep(3000);
        // assert.notEqual(add, null, "could not find the button");
        // await add.click();
        
        

    });


    this.Then(/^I should see the product in the cart$/, async function () {
        let cartItems = await $('.cart_items');
        this. addedProduct1 = await $('#idart')[3];

        let tmp = await cartItems.getText();
        console.log("==>> " + tmp);

        assert((await cartItems.getText()).includes('this.addedProduct1'), "The product is Auld Rare Benriach");

    });

    this.When(/^I click on add\-to button (\d+) times$/, async function (numberoftimes) {
        
   
    });



}