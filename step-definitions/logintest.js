
let {$, sleep} = require('./funcs.js');
module.exports = function(){

  this.Given(/^that I already have login page$/,async function () {
    await helpers.loadPage('http://localhost:3306/login');
    await sleep(1000);
});

this.When(/^user enter username$/, async function () {
  let userInput = "priya";
      let field = await $(by.name('username'));
      assert(field, "The name  doesn't exist");
      if (field) {
        await field.sendKeys(userInput);
        await sleep(1000);
      }
    }
  );
     
 
  
  this.When(/^user enter password$/, async function (callback) {
        let password  = await $('.form-group.form-control').sendKeys("Tiger1231");
        assert.notEqual(password, null, 'Could not find the password');
          });

      this.When(/^user  click on signing button$/, async function () {
        let signinButton = await $('form-group.btn btn-succces');
        assert.notEqual(signinButton, null, 'Could not find the signin button');
        await signinButton.click();
    });


      this.Then(/^user should be logged in sucessfully$/, async function () {
        let login = await $('.btn btn-succcess btn-lg');
        assert(login ,"login fail");
    });
}
    
    










































































      
