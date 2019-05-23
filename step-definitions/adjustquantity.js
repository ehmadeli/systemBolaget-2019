let {$, sleep} = require('./funcs');


module.exports = function(){

  this.Given(/^The product is already in the shopping cart$/, async function(){
      
       await helpers.loadPage('http://localhost:3306/categories.html');
      // await helpers.loadPage('http://localhost:' + portnumber + '/categories.html')
       await sleep(3000);
       let p1 = (await $('.product_cart'))[2];
       await p1.click();
       await sleep(3000);
       
       //let cart = await driver.findElement(by.xpath('/html/body/div[2]/header/div[2]/div[3]/div[3]/a'));
       let cart = await driver.findElement(by.css('.cart'));
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
      
      assert.equal((text / 1), 1, "This is not zero numbers of product");
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
  assert.equal((text / 1), 2, "This is not one numbers of product");
});



//Scenario: successfully decrease of the different product in the shopping cart
this.Given(/^the different products are already in the shopping cart$/, async function(){
  await helpers.loadPage('http://localhost:3306/categories.html');
  await sleep(3000);
  
  let p1 = (await $('.product_cart'))[0];
  let p2 = (await $('.product_cart'))[1];
  


  await p1.click();
  await p2.click();
  await sleep(3000);
  
  //let cart = await driver.findElement(by.xpath('/html/body/div[2]/header/div[2]/div[3]/div[3]/a'));
  let cart = await driver.findElement(by.css('.cart'));
  await cart.click();
  await sleep(3000);
});

this.When(/^i click on the minus-button on products$/, async function(){
  // add one more product
  let plusBtn1 = (await $('.qty_add'))[0];
  await plusBtn1.click();
  await sleep(2000);
  
  let plusBtn2 = (await $('.qty_add'))[1];
  await plusBtn2.click();
  await sleep(2000); 
  
   
    //Click på minus buttons
    let minusBtn1 = (await $('.qty_sub'))[0];
    await minusBtn1.click();
    
    await sleep(3000);   
    
    let minusBtn2 = (await $('.qty_sub'))[1];
    await minusBtn2.click();
    await sleep(3000);
    
  });

  this.When(/^I click on the plus-button on products$/, async function(){
    // add one more product
    let plusBtn1 = (await $('.qty_add'))[0];
    await plusBtn1.click();
    await sleep(2000);
    
    let plusBtn2 = (await $('.qty_add'))[1];
    await plusBtn2.click();
    await sleep(2000); 
    
  });


  this.Then(/^it should decrease  products from the cart$/, async function(){
    let qProduct1 = (await $('.product_num'))[0];
    let text1 = await qProduct1.getText();
    let qProduct2 = (await $('.product_num'))[1];
    let text2 = await qProduct2.getText();

    assert.equal((text1 / 1), 1, "This is not zero numbers of product");
    assert.equal((text2 / 1), 1, "This is not zero numbers of product");
  });

  this.Then(/^it should increase  products into the cart$/, async function(){
    let qProduct1 = (await $('.product_num'))[0];
    let text1 = await qProduct1.getText();
    let qProduct2 = (await $('.product_num'))[1];
    let text2 = await qProduct2.getText();
    assert.equal((text1 / 1), 2, "This is not one numbers of product");
    assert.equal((text2 / 1), 2, "This is not one numbers of product");
  });

//Scenario: successfully increase of the different product in the shopping cart

//Scenario: successfully adjust amount of same product in the shopping cart




this.Then(/^it should add as many products to the cart$/, async function(){

});




//Scenario: The quantity of the product can never go below one if it does it is removed
this.Given(/^that there is already one product in the shopping cart$/, async function(){
  await helpers.loadPage('http://localhost:3306/categories.html');
      // await helpers.loadPage('http://localhost:' + portnumber + '/categories.html')
       await sleep(3000);
       let p1 = (await $('.product_cart'))[5];
       await p1.click();
       await sleep(3000);
       let cart = await driver.findElement(by.css('.cart'));
       await cart.click();
       await sleep(3000);
});

this.When(/^i click on minus-button once$/, async function(){
  let minusBtn = await $('.qty_sub.qty_button.trans_200.text-center');
         
 
  //Click på minus button
  await minusBtn.click();
  await sleep(3000);
});

this.Then(/^the product should be removed from the cart$/, async function(){
  let p = await $('.product_num');
  assert.isNotNull(!p, "The product is not removed from cart");
});

}