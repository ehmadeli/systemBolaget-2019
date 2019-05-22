let { $, sleep } = require('./funcs.js');

module.exports = function () {

    this.Given(/^that the products are available in the store$/, async function () {
        await helpers.loadPage('http://localhost/%27' + portnumber + '/categories.html')

    });



    this.When(/^I click on add\-to button$/, async function () {
        let add = await $('.search #search');
        let add = await $('.search .searchbutton');
        await add.click();



    });

    this.Then(/^it should be added to the cart$/, async function () {


    });

    this.When(/^I click on add\-to button (\d+) times$/, async function () {


    });

    this.Then(/^it should be added to the cart$/, async function () {


    });
    this.When(/^I click on add\-to button$/, async function () {


    });



}