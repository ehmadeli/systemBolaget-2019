let assert = require('assert');

class PurchaseForm {
  constructor(name, age, address){
    
    assert (typeof name == 'string', 'The name ' + name + ' is not a string');
    assert (isNaN(name), 'The name ' + name + ' only consists of a bunch of numbers');
    assert (name != '', 'The name is an empty string');

    assert (typeof age == 'number', 'The age ' + age + ' is not a number');
    assert (age > 0, 'The age ' + age + ' is less than 0');
    assert (age <= 100, 'The age ' + age + ' is above 100');

    assert (typeof address == 'string', 'The address ' + address + ' is not a string');
    assert (isNaN(address), 'The address ' + address + ' only consists of a bunch of numbers');
    assert (address != '', 'The address is an empty string');

    this.name = name;
    this.age = age;
    this.address = address;
  }
}

if(typeof module === 'object'){
  module.exports = PurchaseForm;
}