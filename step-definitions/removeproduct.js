let {$, sleep} = require('./funcs');

module.exports = function(){

  this.Given(/^that product is already in the shopping cart$/, async function () {
    let add = await $(' .search-page .add');
let searchBar = await $(' .search #search');
await searchBar.sendKeys('öl')
await add.click()
  });

  this.When(/^I click on the remove button in the shopping cart$/, async function () {
    let removeButton = await $(' .cart-items .remove');
    assert.notEqual(removeButton, null, 'could not find the remove button');
    
  await removeButton.click();
  });


  this.Then(/^It should be removed from the shopping cart$/, async function () {
    // Write code here that turns the phrase above into concrete actions
    
  });


    
}


