let { $, sleep } = require('./funcs.js');

module.exports = function () {
  this.Given(/^that I am in registration page$/, async function () {
    await helpers.loadPage('http://localhost:3306/signup');


  });
  this.When(/^i input my name  in textbox$/, async function () {
    let username = await $('#name');
    assert(username != null, 'Could not find the username');
    await username.sendKeys('priyapanth');

  });
  this.When(/^I  input  my password on textbox$/, async function () {
    let password = await $('#word');
    assert(password != null, 'Could not find the password');
    await password.sendKeys('panth');
  });

  this.Then(/^it should be signup Successfully$/, async function () {
    let signup = await $('#signup');
    assert(signup != null, 'Could not find the signup button');
    await signup.click();
    await sleep(1000);

  });
  this.When(/^i input  username  in textbox$/, async function () {
    let name = await $('#name');
    assert(name != null, 'Could not find the username');
    await name.sendKeys('priyapanth');
  });

  this.When(/^i input same username  in textbox$/,  async function () {
    let name = await $('#name');
    assert(name != null, 'Could not find the username');
    await name.sendKeys('panth');
    
  });
  this.When(/^i input same password  in textbox$/, async function () {
    let password = await $('#word');
    assert(password != null, 'Could not find the password');
    await password.sendKeys('panth');
  
  });
  this.Then(/^It should be signup unSuccessfully$/, async function () {
    let signup = await $('#signup');
    assert(signup != null, 'Could not find the signup button');
    await signup.click();
    await sleep(1000);
  });
  







}