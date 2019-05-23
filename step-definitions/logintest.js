
let {$, sleep} = require('./funcs.js');
module.exports = function(){

  this.Given(/^that I am on the login page$/, async function () {
    await helpers.loadPage('http://localhost:3306/login');
       
    await sleep(1000);
  
  });

this.When(/^I  entered correct username$/, async function () {
  let username = await $('#name');
  assert(username != null, 'Could not find the username');
  await username.sendKeys('test1');
      
      });
    
    this.When(/^I entered correct password$/, async function () {
        let password  = await $('#pass');
        assert(password != null,'Could not find the password');
        await password.sendKeys('test123');
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
}
    
    







































































