let PersonTest = require('./persontest.js');
let SystembolagetTest = require('./bolagettest.js');
let ProductTest = require('./producttest.js');
let ProductCartTest = require('./productcarttest.js');
let CategoryTest = require('./categorytest.js');


let allTests = [
    new PersonTest(),
    new SystembolagetTest(),
    new ProductTest(),
    new ProductCartTest(),
    new CategoryTest()
]


// console.log(Object.getOwnPropertyNames(personTest));
// console.log(Object.getOwnPropertyNames(personTest.__proto__));

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



