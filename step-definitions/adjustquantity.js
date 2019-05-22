let {$, sleep} = require('./funcs');


module.exports = function(){

    this.Given(/^the product is already in the shopping cart$/, async function(){
        //await helpers.loadPage('http://localhost:' + portnumber + '/categories.html');
        await helpers.loadPage('http://localhost:3306/categories.html');
        //move to Shoping Cart
        await sleep(3000);
        let p1 = await driver.findElement(by.xpath('//*[@id="searchFilterDiv"]/div/div/div[3]/div/div[2]'));
        await p1.click();
        await sleep(3000);
        
        let cart = await driver.findElement(by.xpath('/html/body/div[2]/header/div[2]/div[3]/div[3]/a'));
        await cart.click();
        await sleep(3000);

    });

this.When(/^i click on the minus-button$/, async function(){
  // add one more product
  let plusBtn = await $('.qty_add.qty_button.trans_200.text-center');
  await plusBtn.click();
  await sleep(3000);

  let pName = await $('.product_name a');
  let qProduct = await $('.product_text.product_num');
  let minusBtn = await $('.qty_sub.qty_button.trans_200.text-center');
  
  //Click på minus button
  await minusBtn.click();
  await sleep(3000);
  qProduct = await $('.product_text.product_num');
  text = await qProduct.getText();
      
});

this.Then(/^it should decrease one product from the cart$/, async function(){
     assert.equal((text / 1), 1, "This is not one number of product");
});


//Scenario: successfully increase of the same product in the shopping cart
this.When(/^I click on the plus-button for a product$/, async function(){
  let plusBtn = await $('.qty_add');
  await plusBtn.click();
  await sleep(3000);
  qProduct = await $('.product_text.product_num');
  text = await qProduct.getText();

});

this.Then(/^it should increase one product into the cart$/, async function(){
  assert.equal((text / 1), 2, "This is not two numbers of product");

});



//Scenario: successfully decrease of the different product in the shopping cart
this.Given(/^the different products are already in the shopping cart$/, async function(){
  await helpers.loadPage('http://localhost:3306/categories.html');
  await sleep(3000);
  let p1 = await driver.findElement(by.xpath('/html/body/div[2]/div/div[3]/div[1]/div[2]/div[1]/div/div/div[3]/div/div[2]'));
  let p2 = await driver.findElement(by.xpath('/html/body/div[2]/div/div[3]/div[1]/div[2]/div[2]/div/div/div[3]/div/div[2]'));
  
  await p1.click();
  await p2.click();
  await sleep(3000);
  
  let cart = await driver.findElement(by.xpath('/html/body/div[2]/header/div[2]/div[3]/div[3]/a'));
  await cart.click();
  await sleep(3000);
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