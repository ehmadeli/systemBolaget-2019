let Systembolaget     = require('../bolaget');
let Person = require('../person.js');
let assert = require('assert');

module.exports = class SystembolagetTest {
    
    testSystembolagetConstructor(){

        // när vi skapar en instans av systembolaget så skall
        // den få en array av personer som befinner sig i affären
        assert.doesNotThrow(
          function() { new Systembolaget(20); },
          "SystemBolaget could not be created with a supplied ageLimit of 20"
        );
      
        assert.throws(
          function() { new Systembolaget(); },
          "SystemBolaget could be created without a ageLimit set"
        );
      
        let store;
        assert.doesNotThrow(
          function() { store = new Systembolaget(45); },
          "SystemBolaget could not be created with a supplied ageLimit of 45"
        );
        assert.deepStrictEqual(store.people, [], "A newly created store did not have an empty people-array");
        assert(store.ageLimit === 45, "Expected ageLimit 45, got: " + store.ageLimit);
      
        let p;
         assert.doesNotThrow(
           function() { p = new Systembolaget(30); },
           "SystemBolaget could not be created with a supplied ageLimit of 30"
         );
         assert(
           p.ageLimit === 30,
           "SystemBolaget was created with the age limit 30 but now has a diff. limit"
         );  
      }
    
    testSellingAlcohol(){
        // endast personer över åldersgränsen
        // skall få köpa alkohol
          
        //let bol = new Systembolaget(20);
        let store21 = new Systembolaget(21);
        let store70 = new Systembolaget(70);

        let young = new Person('Calle', 15);
        let middle = new Person('Mats', 32);
        let old = new Person('Gösta', 77);
         
        // Test buying with a too young person
        assert.throws(
          function() { store21.sellAlcohol(young); },
          "Systembolaget21 sold alcohol to an underaged person 15"
        );
        assert.throws(
          function() { store70.sellAlcohol(young); },
          "Systembolaget70 sold alcohol to an underaged person 15"
        );
        assert.throws(
          function() { store70.sellAlcohol(middle); },
          "Systembolaget70 sold alcohol to an underaged person 32"
        );

        // Test buying with a correct age
        assert.doesNotThrow(
          function() { store21.sellAlcohol(middle); },
          "Systembolaget21 could not sell alcohol to a person with the correct age 32"
        );
        assert.doesNotThrow(
          function() { store70.sellAlcohol(old); },
          "Systembolaget70 could not sell alcohol to a person with the correct age 77"
        );

          // Test buying with non-people
        assert.throws(
          function() { store21.sellAlcohol(undefined); },
          "Systembolaget21 sold alcohol to: undefined"
        );
        assert.throws(
          function() { store21.sellAlcohol(true); },
          "Systembolaget21 sold alcohol to: true"
        );
        assert.throws(
          function() { store21.sellAlcohol(store70); },
          "Systembolaget21 sold alcohol to the Systembolaget-instance: store70"
        );
        assert.throws(
          function() { store21.sellAlcohol({name: 'a', age: 22}); },
          "Systembolaget21 sold alcohol to the object: {name: 'a', age: 22}"
        );
        assert.throws(
          function() { store21.sellAlcohol("Petter"); },
          "Systembolaget21 sold alcohol to the string: Petter"
        );
      
              
        assert.throws(
            function() { bol.sellAlcohol(new Person("Kalle", 35)); },
            "Endast personer som befinner i affären skall få köpa alkohol"
          );
      }
      
    testEnterStore(){
      let store = new Systembolaget(23);
      let aPerson = new Person('Katarina', 30);
 
      assert.doesNotThrow(
        function() { store.enter(aPerson); },
        "A person could not enter an empty Systembolaget"
      );
      assert.throws(
        function() { store.enter(aPerson); },
        "A person could not enter the same Systembolaget 2 times in a row"
      );
 
      assert(store.people.includes(aPerson), "After entering the Systembolaget aPerson was still not in the people-array");
 
      assert.throws(
        function() { store.enter({name: 'a', age: 22}); },
        "An object could enter Systembolaget"
      );
      assert.throws(
        function() { store.enter(undefined); },
        "undefined could enter Systembolaget"
      );
      assert.throws(
        function() { store.enter(123); },
        "123 could enter Systembolaget"
      );

      }
      
  testLeaveStore(){
    let store = new Systembolaget(18);
    let aPerson = new Person('Björn', 50);
 
    assert.throws(
      function() { store.leave(aPerson); },
      "A person could leave an empty Systembolaget"
    );
 
    store.enter(aPerson);
 
    assert.doesNotThrow(
      function() { store.leave(aPerson); },
      "A person could not leave Systembolaget"
    );
 
    assert.throws(
      function() { store.leave(aPerson); },
      "A person could leave the same Systembolaget 2 times in a row"
    );
 
    assert(!store.people.includes(aPerson), "After leaving the Systembolaget aPerson was still in the people-array");
 
    assert.throws(
      function() { store.leave({name: 'abc', age: 23}); },
      "An object could leave Systembolaget"
    );
    assert.throws(
      function() { store.leave(undefined); },
      "undefined could leave Systembolaget"
    );
    assert.throws(
      function() { store.leave(123); },
      "123 could leave Systembolaget"
    );
    assert.throws(
      function() { store.leave(false); },
      "false could leave Systembolaget"
    );
      
        // endast personer som REDAN befinner sig
        // i affären skall få gå ut ur affären
      
        // let bol = new Systembolaget(20);
        // let per = new Person("Kalle", 30);
        // let per2 = new Person("Mats", 50);
        
        // assert.throws(
        //   function() { bol.enter(per); },
        //   "Endast personer över åldersgränsen  skall få köpa alkohol"
        // );
      
        // // assert( bol.people.includes(per),
        // // "Endast  personer som INTE REDAN befinner sig i affären skall få gå in i affären");
        
        // assert.throws(function() {bol.leave(per);} ,  "Endast  personer å gå ut ur affären");
        // // Tips:
        // // Array method splice
      
      }
      
    
}