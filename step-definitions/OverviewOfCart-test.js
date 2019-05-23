const App = require('../views/js/app.js');

module.exports = function () {
  // let app = new App();

  this.Given(/^that I already have products in the cart$/, async function () {

    await helpers.loadPage('.addtocart' + '.addtocart');
  });

  this.When(/^I click on cart\-button$/, async function () {



    this.Then(/^I can see all the products in the cart and their details$/, async function () {


    });

    this.Given(/^that I already have products in the cart$/, async function () {


    });

    this.When(/^I click on cart\-button$/, async function () {

      let cartButton = await $('.header.cart');
      assert.notEqual(cartButton, null, 'could not find the cart button');
      await cartButton.click();

    });

    this.Then(/^I can see the total price of products in the cart$/, async function () {


    });
    this.Given(/^that I already have products in the cart$/, async function () {


    });
    this.When(/^I change the quantities of the products$/, async function () {


    });
    this.Then(/^I can see new total price of products in the cart$/, async function () {


    });

  });


}



let { $, sleep } = require('./func.js');
module.exports = function () {

  this.Given(/^that I searched and added products to the cart$/, async function () {

    let searchBox = await $('#search');
    let theButton = await $('.searchButton');

    await searchBox.sendkeys("Harviestoun old Engine oil");
    await theButton.click();
    let add = await $('.search-page .add');
    if (add.length > 0)
      add = add[0];

  });

  assert.notEqual(add, 'could not find the addbutton');
  await add.click();
  let firstProduct = await $('.cart-item td:first-child');
  this.addProduct = await firstProduct.getText();
  await sleep(100);
};

this.when(/^that I press on the cart to the see the overview $/, async function () {

  let theButton = await $('.shoppingcart');
  assert(theButton !== null, 'The shopping cart does not Exist');
  if (theButton) {
    await theButton.click();
    await sleep(100);
  }
});

this.Given(/^that I search and added products to the cart$/, async function () {
  let searchBar = await $('.search #search');
  assert.notEqual(searchBar, null, 'could not find the search bar');

  await searchBar.sendkeys('Brancott Estate');
  let searchButton = await $('.searchbutton');

  assert.notEqual(searchButton, null, 'could not find the search button');
  await searchButton.click();

  let add = await $('.search-page .add');
  assert.notEqual(add, null, 'could not find the addbutton');

  if (Array.isArray(add) == true) {
    add = add[0];
  }

  await add.click();
  let firstProduct = await $('.cart-items td:first-child');
  this.addedProduct1 = await firstProduct.getText();

  await searchBar.clear();
  await searchBar.sendkeys('Daruvar');
  await searchButton.click();
  add = await $('.search-Page .add');

  assert.notEqual(add, null, 'could not find the add button');
  if (Array.isArray(add) === true) {
    add = add[0];
  }

  await add.click();
  let searchProduct = await $('.cart-items td:first-child');
  this.addedProduct2 = await secondProduct[1].getText();

  await searchBar.clear();
  await searchBar.sendkeys('Svarta Trannan');
  await searchButton.click();
  add = await $('.search-page .add');

  assert.notEqual(add, null, 'could not find the add Button');
  if (Array.isArray(add) === true) {
    add = add[0];
  }

  await add.click();
  let thirdProduct = await $('.cart-items td:first-child');

  this.addedProduct3 = await thirdProduct[1].getText();

});



this.Then(/^show the total price of products in the cart$/, async function () {

  let ProductTotPrice = await $('.cart-items td:first-child');
  assert((await productToPrice[0].getText()).includes
    (this.addedProduct1), 'The cart do not contain 3 products');
  productTotPrice = await $('.cart-items td:first-child');

  assert((await productTotPrice[1].getText()).includes(this.addedProduct2), 'The cart do not contain 3 products');
  productTotPrice = await $('.cart-items td:first-child');
  assert((await productTotPrice[3].getText()).includes(this.addedProduct3), 'The cart do not contain 3 products');
});













