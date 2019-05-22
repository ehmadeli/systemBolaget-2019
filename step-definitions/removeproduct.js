let { $, sleep } = require('./funcs');

module.exports = function () {

  this.BeforeScenario(async function()  {
    console.log("hej", !!helpers);
    
    await helpers.loadPage('http://localhost:3306/');
    console.log("done");
});

  this.Given(/^that product is already in the shopping cart$/, async function () {
    let searchBar = await $('#myInput');
    await searchBar.sendKeys('öl')
    // put her klick på sökningen 
    let add = await $(''); 
    await add.click()
  });

  this.When(/^I click on the remove button in the shopping cart$/, async function () {
    let removeButton = await $(' .cart-items .remove');
    assert.notEqual(removeButton, null, 'could not find the remove button');

    await removeButton.click();
  });


  this.Then(/^It should be removed from the shopping cart$/, async function () {
    let cartItem = await $('.cart-item .product_name a');
    let nameOfItem = cartItem.text
  });

  


}



