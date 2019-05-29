let { $, sleep } = require('./funcs');

module.exports = function () {

  this.BeforeScenario(async function () {
    // console.log("hej", !!helpers);

    await helpers.loadPage('http://localhost:3306/categories.html');
    // console.log("done");
  });

  //Scenario 1

  this.Given(/^that a product is already in the shopping cart$/, async function () {
    let searchBox = await $('#myInput');
    await searchBox.sendKeys("Motzenbäcker Marie");

    await sleep(3000);

    let add = await $('.product-listing .product_cart');
    if (add.length > 0)
      add = add[0];

    assert.notEqual(add, null, 'could not find the add button');
    await add.click();


  });

  this.When(/^I click on the remove button$/, async function () {

    await helpers.loadPage('http://localhost:3306/cart.html');
    await sleep(5000);

    let removeButton = await $('.cart_items .remove_item');
    assert.notEqual(removeButton, null, 'could not find the remove button');

    if (removeButton.length) {
      removeButton = removeButton[0];
    }

    await removeButton.click();
    await sleep(3000);

  });


  this.Then(/^all products should be removed from the shopping cart$/, async function () {


    let cartItem = await $('.cart_items .product_name');
    assert(cartItem == null, "There is an item left in the cart");

  });

  //Scenario 2
  /*
    this.Given(/^that there are two units of the same product in the shopping cart$/, async function () {
  
      let searchBox = await $('#myInput');
      await searchBox.sendKeys("canella");
  
      await sleep(3000);
  
      let add = await $('.product-listing .product_cart');
      if (add.length > 0)
        add = add[0];
  
      assert.notEqual(add, null, 'could not find the add button');
           
        await add.click()
  
        await helpers.loadPage('http://localhost:3306/cart.html');
        await sleep(3000);
  
        let plusBtn = await $('.cart_items li:first-child .qty_add.qty_button ');
        await plusBtn.click();
        await sleep(3000);
  
    
  
      });
  
       this.When(/^I click on remove button $/, async function () {
          let removeButton = await $('.cart_items .remove_item');
          assert.notEqual(removeButton, null, 'could not find the remove button');
      
          if (removeButton.length) {
            removeButton = removeButton[0];
          }
      
          await removeButton.click();
          removeButton = await $('.cart_items .remove_item');
          assert.notEqual(removeButton, null, 'could not find the remove button');
      
        }); 
  
  
      this.Then(/^products should be removed from the shopping cart$/, async function () {
        let cartItem = await $('.cart_items .product_name a');
        assert.notEqual(cartItem, null, "det finns tydligen något kvar")
        assert(Array.isArray(cartItem) == false, 'det vartydligen en array');
        console.log(await cartItem.getText());
        assert((await cartItem.getText()).incluides
          (this.addedProduct2), "Det finns tydligen något kvar")
      });
      //});  */

  //Scenario 3

  this.Given(/^that there are two different products in the shopping cart$/, async function () {
    let searchBar = await $('#myInput');
    assert.notEqual(searchBar, null, 'could not find the searchbar');
    await searchBar.sendKeys('Fighting Cock');

    await sleep(3000);

    let add = await $('.product-listing .product_cart');
    assert.notEqual(add, null, 'could not find the add button ');
    if (Array.isArray(add)) {
      add = add[0];
    }

    await add.click();

    helpers.loadPage('http://localhost:3306/cart.html');

    helpers.loadPage('http://localhost:3306/categories.html');

    searchBar = await $('#myInput');
    assert.notEqual(searchBar, null, 'could not find the searchbar');
    await searchBar.sendKeys('Josés');

    await sleep(3000);


    add = await $('.product-listing .product_cart');
    assert.notEqual(add, null, 'could not find the add buttorn');
    if (Array.isArray(add)) {
      add = add[0];
    }
    await add.click()

    helpers.loadPage('http://localhost:3306/cart.html');
    await sleep(3000);

    let secondProduct = await $('.cart_items li:nth-child(2)');
    let addedProduct2 = await secondProduct.getText();

  });




  this.When(/^I click on remove button for each product$/, async function () {

    await helpers.loadPage('http://localhost:3306/cart.html');
    await sleep(3000);

    let removeButton = await $('.cart_items .remove_item');
    assert.notEqual(removeButton, null, 'could not find the remove button');

    if (removeButton.length) {
      removeButton = removeButton[0];
    }
    await removeButton.click();


    removeButton = await $('.cart_items .remove_item');
    assert.notEqual(removeButton, null, 'could not find the remove button');

    if (removeButton.length) {
      removeButton = removeButton[0];
    }
    await removeButton.click();


  });


  /* this.Then(/^product should be removed from the shopping cart$/, async function () {
      let cartItem = await $('.cart_items .product_name a');
      assert(cartItem, null, "det finns tydligen något kvar")
      assert(Array.isArray(cartItem) == false, 'det vartydligen en array');
      
      
      console.log(await cartItem.getText());

      assert((await cartItem.getText()).incluides (this.addedProduct2), "Det finns tydligen något kvar")

    });
*/
  //Scenario 4

  /* this.Given(/^that there are two different products in the shopping cart$/, async function () {
     let searchBar = await $('#myInput');
     assert.notEqual(searchBar, null, 'could not find the searchbar');
     await searchBar.sendKeys('renat')
     //   let searchbutton = await $('.searchbutton');
     //   assert.notEqual(searchButton, null, 'could not find the search button');

     //   await searchButton .click();

     let add = await $('.product-listing .product_cart');
     //assert.notEqual(add, null, 'could not find the add button');
     if (Array.isArray(add === true)) {
       add = add[0];
     }
     await add.click();
     let firstProduct = await $('.cart_items li:first-child');
     this.addedProduct1 = await firstProduct.getText();

     await searchBar.clear();
     await searchBar.sendKeys("gin")
     //   await searchButton.click();

     add = await $('.product-listing .product_cart');
     assert.notEqual(add, null, 'could not find the add button');
     if (Array.isArray(add) == true) {
       add = add[0];

       await add.click();
       let secondProduct = await $('.cart_items li:nth-child(2)');
       this.addedProduct2 = await secondProduct.getText();
 


     }
   }); */

  this.When(/^I click on remove button for one of the two different products$/, async function () {
    let removeButton = await $('.cart_items .remove_item');
    assert.notEqual(removeButton, null, 'could not find the remove button');

    if (removeButton.length) {
      removeButton = removeButton[0];
    }

    await removeButton.click();

  });

  this.Then(/^the shopping cart should not contain the removed product anymore$/, async function () {
    let productNameElements = await $('.product_name');
    // make an array of it if it isn't
    if(!Array.isArray(productNameElements)){ productNameElements = [productNameElements]; }
    let productNames = [];
    for(let el of productNameElements){
      productNames.push(await el.getText());
    }
  
    assert.isFalse(productNames.includes('Fighting Cock'), "Fighting Cock - the product that should have been removed is still in the cart.");
    
  });

}

