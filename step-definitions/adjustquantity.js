let {$, sleep} = require('./funcs');


module.exports = function(){

    this.Given(/^the product is already in the shopping cart$/, async function(){
        //await helpers.loadPage('http://localhost:3306/cart.html');
    });

    this.When(/^i click on the minus-button$/, async function(){
        //  let minusBtn = await $('.qty_sub');
        //  await minusBtn.click();
    });

    this.Then(/^it should decrease one product from the cart$/, async function(){
      
    });


//Scenario: successfully increase of the same product in the shopping cart
this.When(/^I click on the plus-button for a product$/, async function(){
  // let minusBtn = await $('.qty_sub');
  // await minusBtn.click();
});

this.Then(/^it should increase one product into the cart$/, async function(){

});



//Scenario: successfully decrease of the different product in the shopping cart
this.Given(/^the different products are already in the shopping cart$/, async function(){
  //await helpers.loadPage('http://localhost:3306/cart.html');
});

//Scenario: successfully increase of the different product in the shopping cart

//Scenario: successfully adjust amount of same product in the shopping cart

this.When(/^i type into textbox the amount of products$/, async function(){
  
});
this.Then(/^it should add as many products to the cart$/, async function(){

});


//Scenario: successfully adjust amount of different products in the shopping cart
this.When(/^i type into textbox the amount of products for each product$/, async function(){
  
});

//Scenario: The quantity of the product can never go below one if it does it is removed
this.Given(/^that there is already one product in the shopping cart$/, async function(){
  //await helpers.loadPage('http://localhost:3306/cart.html');
});

this.When(/^i click on minus-button once$/, async function(){
   
});

this.Then(/^the product should be removed from the cart$/, async function(){

});

//Scenario: The quantity of the product can never be below one if it does it is removed
this.Given(/^that there is already atleast two units of a product in the shopping cart$/, async function(){
  //await helpers.loadPage('http://localhost:3306/cart.html');
});

this.When(/^i type zero into the textbox$/, async function(){
   
});

this.Then(/^the product should be removed from the cart$/, async function(){

});




}