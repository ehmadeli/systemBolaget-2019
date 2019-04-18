let PersonTest = require('./persontest.js');
let SystembolagetTest = require('./bolagettest.js');

let allTests = [
    new PersonTest(),
    new SystembolagetTest()
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



