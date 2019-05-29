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

    let company = await $('#checkout_company');
    assert(company != null, 'Could not find the companyname');
    await company.sendKeys('systemBolaget');

    let country = await $('#checkout_country');
    assert(country != null, 'Could not find the country');
    await country.sendKeys('stockhlom');
    await sleep(1000);
    let addressline1 = await $('#checkout_address');
    assert(addressline1 != null, 'Could not find the address');
    await addressline1.sendKeys('systemBolaget');
    await sleep(1000);
    let address2 = await $('#checkout_address_2');
    assert(address2 != null, 'Could not find the addressline2');
    await address2.sendKeys('granövägen');
    await sleep(1000);
    let Zipcode = await $('#checkout_zipcode');
    assert(Zipcode != null, 'Could not find the Zipcode');
    await Zipcode.sendKeys('12345');
    await sleep(1000);
    let city = await $('#checkout_city');
    assert(city != null, 'Could not find the city');
    await city.sendKeys('stockhlom');
    await sleep(1000);
    let province = await $('#checkout_province');
    assert(province != null, 'Could not find the province');
    await province.sendKeys('');
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
    let firstname = await $('#checkout_name');
    await firstname.sendKeys('priya');
    await sleep(1000);
    let lastname = await $('#checkout_last_name');
    assert(lastname != null, 'Could not find the last name');
    await lastname.sendKeys('Panth');
    await sleep(1000);
    let addressline1 = await $('#checkout_address');
    assert(addressline1 != null, 'Could not find the address');
    await addressline1.sendKeys('systemBolaget');
    await sleep(1000);
    let address2 = await $('#checkout_address_2');
    assert(address2 != null, 'Could not find the addressline2');
    await address2.sendKeys('granövägen');
    await sleep(1000);
    let Zipcode = await $('#checkout_zipcode');
    assert(Zipcode != null, 'Could not find the Zipcode');
    await Zipcode.sendKeys('12345');
    await sleep(1000);
    let email = await $('#checkout_email');
    assert(email != null, 'Could not find the emailadd');
    await email.sendKeys('panthpriya12');
    console.log('priya');
    let button1 = await $('#myElement');
    assert(button1 != null, 'Could not find chechout button');
    await button1.click();
  });

  this.When(/^I click on order button$/, async function () {
    let button = await $('#myElement');
    assert(button != null, 'Could not find checkout button');
    await button.click();

  });

  this.Given(/^there is one product in the cart$/, async function () {
    await helpers.loadPage('http://localhost:3306/categories.html');
    await(2000);
    let searchBar = await $('#myInput');
    await searchBar.sendKeys("Renat");
    let add = await $('.product-listing .product_cart');
    assert(add != null, 'Could not find the add button');
if (Array.isArray(add)===true){
  add = add[0];
}
    console.log("HOW MANY", add.length)
    await add.click();
    let cart = await $('.cart');
    assert(cart != null, 'Could not find the cart');
    await cart.click();
    await sleep(1000);
    });

    this.When(/^there are two products in the  cart$/, async function () {
      let searchButton = await $('#myInput');
        await searchButton.click();
        await sleep(1000);
        let add = await $('.product_cart');
        assert(add != null, 'Could not find the product button');
        console.log("HOW MANY ???", add.length)
        await add[0].click();
        let add1 = await $('.product_cart');
        assert(add1 != null, 'Could not find the add button');
        console.log("HOW MANY ???", add.length)
        await add[1].click();
    })
    
      
  }
    
    
    
    
    
      

  
      
    
    

   


  








