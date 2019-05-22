
let {$, sleep} = require('./funcs');

module.exports = function(){




   
  this.Given(/^empty the cart with one product in the shopping cart$/, async function () {
    let cleanBtn = await $('.button .button_clear .trans_200');
///let searchBar = await $(' .search #search');
//await searchBar.sendKeys('öl')
await cleanBtn.click()
  });
    
  

  this.When(/^i click on the empty\-cart button$/, async function () {
    let cleanBtn = await $('.button .button_clear .trans_200');
    await cleanBtn.click()
  });
  

  this.Then( /^It should empty the cart$/, async function () {
   let cartItems = await $('.cart-page .emptycart');
   assert(cartItems.length == 0, "cart is not empty");
    
  });


  this.Given(/^that there are already several different products in the cart$/, async function () {
    // Write code here that turns the phrase above into concrete actions
    
  });

  
  this.When(/^i click on the empty\-cart button$/, async function (callback) {
    // Write code here that turns the phrase above into concrete actions
    
  });

  this.Then(/^It should empty the cart$/, async function () {
    // Write code here that turns the phrase above into concrete actions
   
  });

  }
