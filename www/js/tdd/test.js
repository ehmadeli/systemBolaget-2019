let PersonTest = require('./persontest.js');
let SystembolagetTest = require('./bolagettest.js');
let ProductTest = require('./producttest.js');
let ProductCartTest = require('./productcarttest.js');
let CategoryTest = require('./categorytest.js');
let Perchaseformtest = require('./purchaseformtest.js');

let allTests = [
    new PersonTest(),
    new SystembolagetTest(),
    new ProductTest(),
    new ProductCartTest(),
    new CategoryTest(),
    new Perchaseformtest()
    
]

for (let testClass of allTests){
let allMethods = Object.getOwnPropertyNames(testClass.__proto__);
    for (let method of allMethods){
        if(method !== 'constructor'){
            console.log('testing...', method);
            testClass[method]();
        } else {
         }
    }
    
}



