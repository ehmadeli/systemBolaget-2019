let { $, sleep } = require('./funcs.js');

module.exports = function () {

  this.Given(/^that I am on the web page localhost:(\d+)\/cart\.html$/, async function (portNumber) {
    await helpers.loadPage('http://localhost:' + portNumber + '/cart.html');
    await sleep(1000);
  });
 

  this.When(/^I click on checkout button$/, async function () {
    let button = await $('.checkout_button');
    assert(button != null, 'Could not find checkout button');
    await button.click();
   
  });

  this.When(/^I filled the form with customer detail$/, async function () {
    let checkout = await $('.checkout_button');
    await checkout.click();
    await sleep(1000);
    let firstname = await $('#checkout_name');
    assert(firstname != null, 'Could not find the first name');
    await firstname.sendKeys('priya');

    let lastname = await $('#checkout_last_name');
    assert(lastname != null, 'Could not find the last name');
    await lastname.sendKeys('Panth');

    let country = await $('#checkout_country');
    assert(country != null, 'Could not find the country');
    await country.sendKeys('stockhlom');
    await sleep(1000);

    let addressline = await $('#checkout_address');
    assert(addressline!= null, 'Could not find the address');
    await addressline.sendKeys('systemBolaget');
    await sleep(1000);

    let postno = await $('#checkout_zipcode');
    assert(postno != null, 'Could not find the postno');
    await postno.sendKeys('12345');
    await sleep(1000);
    let city = await $('#checkout_city');
    assert(city != null, 'Could not find the city');
    await city.sendKeys('stockhlom');
    await sleep(1000);
    let phoneno = await $('#checkout_phone');
    assert(phoneno != null, 'Could not find the phoneno');
    await phoneno.sendKeys('systemBolagetco');
    await sleep(1000);
    let email = await $('#checkout_email');
    assert(email != null, 'Could not find the emailadd');
    await email.sendKeys('panthpriya12');

  });

  this.Then(/^It should show me ordering page$/, async function () {
    await helpers.loadPage('http://localhost:3306/purchasedcomplete.html');
    await sleep(1000);
  });

  this.When(/^I click on order button$/, async function () {
    let button = await $('#myElement');
    assert(button != null, 'Could not find checkout button');
    await button.click();

  });

  
  this.Given(/^there is one product in the cart$/, async function () {
     helpers.loadPage("http://localhost:3306/categories.html");
     let searchButton = await $('#myInput');
     await searchButton.click();
     await sleep(1000);
     let add = await $('.product_cart');
     assert(add != null, 'Could not find the add button');
     await add[0].click();
    })

    this.Given(/^there are two products in the cart$/, async function () {
      helpers.loadPage("http://localhost:3306/categories.html");
      let searchButton = await $('#myInput');
        await searchButton.click();
        await sleep(1000);
        let add = await $('.product_cart');
        assert(add != null, 'Could not find the add button');
        await add[0].click();
        assert(add.length > 1, 'Could not find the second add button');
        await add[1].click();
    })
    
      
  }
    
    
    
    
    
      

  
      
    
    

   


  








