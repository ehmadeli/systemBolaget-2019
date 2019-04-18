let assert = require('assert');
let Person = require('./person.js');

module.exports = class Systembolaget {
  constructor(ageLimit){
    
    assert (typeof ageLimit == 'number', 'The ageLimit ' + ageLimit + ' is not a number');
    assert (ageLimit > 0, 'The ageLimit ' + ageLimit + ' is less than 0');
    assert (ageLimit < 120, 'The ageLimit ' + ageLimit + " is above 120 but humans don't live that long");

    this.ageLimit = ageLimit;
    this.people = [];
  }

  sellAlcohol(buyer) {
    assert (buyer instanceof Person, buyer + ' is not a Person');
    assert(buyer.age >= this.ageLimit, buyer.name + ' is too young to buy alcohol');
    console.log(buyer.name + ' bought some alcohol');
  }

  enter(person){
    assert(person instanceof Person, person + ' entering is not a Person');
    assert(!this.people.includes(person), person.name + ' entering is already in the store');

    this.people.push(person);
    console.log(person.name + ' enter in  the store');
  }

  leave(person){
    assert(person instanceof Person, person + ' leaving is not a Person');
    assert(this.people.includes(person), person.name + ' leaving is not in the store');

    this.people.splice(this.people.indexOf(person), 1);
    console.log(person.name + ' left the store');
  }
}