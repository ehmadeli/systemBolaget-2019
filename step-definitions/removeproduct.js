let { $, sleep } = require('./funcs');

module.exports = function () {

  this.BeforeScenario(async function()  {
    console.log("hej", !!helpers);
    
    await helpers.loadPage('http://localhost:3306/categories.html');
    console.log("done");
});

  this.Given(/^that product is already in the shopping cart$/, async function () {
    let searchBar = await $('#myInput');
    assert.notEqual(searchBar, null, 'could not find the searchbar');
    await searchBar.sendKeys('renat')
    let searchbutton = await $('.searchbutton');
    assert.notEqual(searchButton, null, 'could not find the search button');
    
    await searchButton .click();

    let add = await $('.search-page .add');
    assert.notEqual(add, null, 'could not find the add button');
    if (Array.isArray(add === true){
      add = add[0];
    }
    await add.click()
  });

  this.When(/^I click on the remove button in the shopping cart$/, async function () {
    let removeButton = await $(' .cart-items .remove');
    assert.notEqual(removeButton, null, 'could not find the remove button');

    if (removeButton.length) {
      removeButton = removeButton[0];
    }

    await removeButton.click();


  });


  this.Then(/^It should be removed from the shopping cart$/, async function () {
    let cartItem = await $('.cart-item .product_name a');
    assert(cartItems == null, "det finns tydligen något kvar")
    //let nameOfItem = cartItem.text

 
  });

  this.Given(/^that there are (\d+) units in the shopping cart$/, async  function () {
    let searchBar = await $('.search #search');
    assert.notEqual(searchBar, null, 'could not find the searchbar');
    await searchBar.sendKeys('öl')

    let searchButton = await $(' .searchbutton');
    assert.notEqual(searchbar, null, 'could not find the the search button');
    await searchButton.click();
    let add = await $('.search-page .add');
    assert.notEqual(add, null, 'could not find the add button');
    if (array.isArray(add) ===true){
      add = add[0];
    }
    await add.click()
    await add.click()
  });

  this.When(/^I click on remove\-button for each product$/, async function () {
    let removeButton = await $(' .cart-items .remove');
    assert.notEqual(removeButton, null, 'could not find the remove button');

    if (removeButton.length) {
      removeButton = removeButton[0];
    }

    await removeButton.click();
    removeButton = await $('.cart-items .remove');
    assert.notEqual(removeButton, null, 'could not find the remove button');

  });


  this.Then(/^products should be removed from the shopping cart$/, async function () {
    let cartItem = await $('.cart-item .product_name a');
    assert.notEqual(cartItems, null, "det finns tydligen något kvar")
    assert(Array.isArray(cartItem) == false, 'det vartydligen en array');
    console.log(await cartItems.getText());
    assert((await cartItems.getText()).incluides
    (this.addedProduct2), "Det finns tydligen något kvar")
});
  });


  this.Given(/^that there are two different products in the shopping cart$/, async function () {
    let searchBar = await $('#myInput');
    assert.notEqual(searchBar, null, 'could not find the searchbar');
    await searchBar.sendKeys('renat')
    let searchbutton = await $('.searchbutton');
    assert.notEqual(searchButton, null, 'could not find the search button');
    
    await searchButton .click();

    let add = await $('.search-page .add');
    assert.notEqual(add, null, 'could not find the add button');
    if (Array.isArray(add === true){
      add = add[0];
    }
    await add.click()
  });


  
  this.When(/^I click on remove\-button for each product$/, async function () {
    
      let removeButton = await $(' .cart-items .remove');
      assert.notEqual(removeButton, null, 'could not find the remove button');
  
      if (removeButton.length) {
        removeButton = removeButton[0];
      }
  
      await removeButton.click();
      removeButton = await $('.cart-items .remove');
      assert.notEqual(removeButton, null, 'could not find the remove button');
  
      if (removeButton.length) {
        removeButton = removeButton[0];
      }

      await removeButton.click();
      removeButton = await $('.cart-items mremove'),
      assert.notEqual(removeButton, null, 'could not find the remove button');
      if (removeButton.length) {
        removeButton = removeButton[0];
      }
      await removeButton.click();


    });
  


  
  this.Then(/^the shopping cart should not contain any products$/, async function () {
    let cartItem = await $('.cart-item .product_name a');
      assert.notEqual(cartItems, null, "det finns tydligen något kvar")
      assert(Array.isArray(cartItem) == false, 'det vartydligen en array');
      console.log(await cartItems.getText());
      assert((await cartItems.getText()).incluides
      (this.addedProduct2), "Det finns tydligen något kvar")

  });



  this.Given(/^that there are two different products in the shopping cart$/, async function () {
    let searchBar = await $('#myInput');
    assert.notEqual(searchBar, null, 'could not find the searchbar');
    await searchBar.sendKeys('renat')
    let searchbutton = await $('.searchbutton');
    assert.notEqual(searchButton, null, 'could not find the search button');
    
    await searchButton .click();

    let add = await $('.search-page .add');
    assert.notEqual(add, null, 'could not find the add button');
    if (Array.isArray(add === true){
      add = add[0];
    }
    await add.click();
    let firstProduct = await $('.cart-items td:first-child');
    this.addedProduct1 = await firstProduct.getText();

    await searchBar.clear();
    await searchBar.sendKeys("gin")
    await searchButton.click();

    add = await $('.search-page .add');
    assert.notEqual(add, null, 'could not find the add button');
    if (Array.isArray(add) == true){
      add = add[0];
    }
  });

  


  this.When(/^I click on remove\-button for one of the two different products$/, async function () {
    let removeButton = await $(' .cart-items .remove');
    assert.notEqual(removeButton, null, 'could not find the remove button');

    if (removeButton.length) {
      removeButton = removeButton[0];
    }

    await removeButton.click();
   

    


  });



  this.Then(/^the shopping cart should not contain the removed product anymore$/, async function () {
    
    
      let cartItem = await $('.cart-item .product_name a');
      assert.notEqual(cartItems, null, "det finns tydligen något kvar")
      assert(Array.isArray(cartItem) == false, 'det vartydligen en array');
      console.log(await cartItems.getText());
      assert((await cartItems.getText()).incluides
      (this.addedProduct2), "Det finns tydligen något kvar")
  });


}







