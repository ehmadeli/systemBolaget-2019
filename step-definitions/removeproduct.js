let { $, sleep } = require('./funcs');

module.exports = function () {

  this.Given(/^that product is already in the shopping cart$/, async function () {
    let searchBar = await $(' .search #search');
    await searchBar.sendKeys('öl')
    let add = await $(' .search-page .add');
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

  this.Given(/^that there are  different products in the shopping cart$/, async function () {
    let add = await $(' .search-page .add');
    let searchBar = await $('.search #search');
     await searchBar.sendKeys('öl')
     await add.click()
     await searchBar.sendKeys('Vin')
    await add.click()
   });


   this.When(/^I click on remove\-button for each product$/, async function () {
   let removeButton = await $('.cart-items .remove');
   assert.notEqual(removeButton, null, 'could not find the remove button');
   if (removeButton.length) {
     removeButton = removeButton[0];
   }
 
   await removeButton.click();
 });

  
  this.Then(/^products should be removed from the shopping cart$/, async function () {
    let cartItem = await $('.cart-item .product_name a');
    let nameOfItem = cartItem.text
  });


}



