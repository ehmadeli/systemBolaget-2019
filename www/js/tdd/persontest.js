let assert = require('assert');
let Person = require('../person.js');
let Systembolaget = require('../bolaget.js');

module.exports = class PersonTest {
// constructor(){
//     console.log('constructor');
// }

testPersonName(){
    let validAge = 18;
  
      assert.throws(
        function() { new Person(undefined, validAge); },
        "A person with no name was created"
      );
  
      assert.throws(
        function() { new Person('', validAge); },
        "A person with an empty name was created"
      );
  
      assert.throws(
        function() { new Person('123456', validAge); },
        "A person with the name '123456' was created"
      );
  
       assert.throws(
        function() { new Person(123456, validAge); },
         "A person with a numeral name was created"
       ); 
  
    // Try creating a person with a valid name and age - it should not crash
     assert.doesNotThrow(
        function() { new Person("Kalle", validAge); },
       "A person with correct name and age, should NOT throw an error"
     );
  
    // Try creating a person and then (after a successful creation)
    // Check if the name of the person actually matches the value
    // we used when creating it
    let p;
    assert.doesNotThrow(
      function() { p = new Person("Kalle", validAge); },
      "A person with correct name and age, should NOT throw an error"
    );
    assert(
      p.name === 'Kalle',
      "A person was created with the name Kalle but now has a diff. name"
    );
  }
  
testPersonAge(){
    // Add more tests here concerning what happens when
    // someone creates a person with a invalid ages
    let validName = "Kalle";
    let validAge = 30;
    
     assert.throws(
       function() { new Person(validName, undefined); },
       "A person  with no age was created"
     );
     assert.throws(
       function() { new Person(validName, ''); },
       "A person with an empty string age was created"
     );
  
     assert.throws(
       function() { new Person(validName, 0); },
       "A person with an age = 0 was created"
     );
  
      assert.throws(
        function() { new Person(validName, -10); },
        "A person with an age < 0 was created"
      );
  
      assert.throws(
        function() { new Person(validName, 120); },
        "A person with an age > 100 was created"
      );
  
      assert.throws(
        function() { new Person(validName, '123456'); },
        "A person with the age-string '123456' was created"
      );
      assert.throws(
        function() { new Person(validName, { age: 30 }); },
        "A person with an age-object was created"
      );

    assert.doesNotThrow(
      function() { new Person(validName, 37); },
      "A person with correct name and age, should NOT throw an error"
    );
  
     let p;
     assert.doesNotThrow(
       function() { p = new Person(validName, 30); },
       "A person with correct name and age, should NOT throw an error"
     );
     assert(
       p.age === 30,
       "A person was created with the age 30 but now has a diff. age"
     );  
  }

}