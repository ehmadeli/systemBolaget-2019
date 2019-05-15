let {$, sleep} = require('./funcs');

module.exports = function(){




   
  this.Given(/^that product is already in the shopping cart$/, async function () {
    let cleanBtn = await $('.button .button_clear .trans_200');
///let searchBar = await $(' .search #search');
//await searchBar.sendKeys('öl')
await cleanBtn.click()
  });
    
  

  this.When(/^i click on the empty\-cart button$/, async function () {
    // Write code here that turns the phrase above into concrete actions
    
  });

  this.Then(/^It should empty the cart$/, async function () {
    // Write code here that turns the phrase above into concrete actions
    
  });


  this.Given(/^that there are already several different products in the cart$/, async function () {
    // Write code here that turns the phrase above into concrete actions
    
  });

  
  this.When(/^i click on the empty\-cart button$/, async function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.Then(/^It should empty the cart$/, async function () {
    // Write code here that turns the phrase above into concrete actions
   
  });

  }
