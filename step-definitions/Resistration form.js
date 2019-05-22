let { $, sleep } = require('./funcs.js');

module.exports = function () {
    this.Given(/^that I am in signin page$/,async function () {
      await helpers.loadPage('http://localhost:3306/login');

        
      });


    this.When(/^user clickon register link$/, async function () {
       
      let signup= await $('.col-sm-6 a');
 
      assert(signup, null,'Could not find signup button');
   
      await registrationlink .click();
      await sleep(5000);
    });
    

    this.Then(/^user should be in registration page$/,  async function (callback) {
      await helpers.loadPage('http://localhost:3306/signup');
 
      
      
  });
    
  

  }