
let {$, sleep} = require('./funcs.js');
module.exports = function(){

  this.Given(/^that I am on the login page$/, async function () {
    await helpers.loadPage('http://localhost:3306/login');
       
    await sleep(1000);
  
  });

this.When(/^I  entered correct username$/, async function () {
  let username = await $('#name');
  assert(username != null, 'Could not find the username');
  await username.sendKeys('priyapanth');
      
      });
    
    this.When(/^I entered correct password$/, async function () {
        let password  = await $('#pass');
        assert(password != null,'Could not find the password');
        await password.sendKeys('panth');
          });

      this.When(/^I click on sign in button$/, async function ()  {
        let signin = await $('#btn');
        assert(signin != null, 'Could not find the signin button');
        await signin.click();
    });


      this.Then(/^it should be login Succssfully$/, async function () {
        let signin = await $('#login');
        assert(signin != null, 'Could not find the sign button');
        await signin.click();
        await sleep(1000);
    });

this.Given(/^I entered wrong username$/, async function () {
  let username = await $('#name');
  assert(username != null, 'Could not find the username');
  await username.sendKeys('priyapanth1');
  
});
this.Given(/^I entered wrong password$/, async function () {
  let password  = await $('#pass');
  assert(password != null,'Could not find the password');
  await password.sendKeys('panth1');
});

    
this.Then(/^it should be login unSuccssfully$/,async function () {
  let login = await $('#btn');
        assert(login != null, 'Could not find the sign button');
        await login.click();
        await sleep(1000);
    });
  
 


}




































































