let assert = require('assert');

module.exports = class Person {
  constructor(name, age){
    
    assert (typeof name == 'string', 'The name ' + name + ' is not a string');
    assert (isNaN(name), 'The name ' + name + ' only consists of a bunch of numbers');
    assert (name != '', 'The name is an empty string');

    assert (typeof age == 'number', 'The age ' + age + ' is not a number');
    assert (age > 0, 'The age ' + age + ' is less than 0');
    assert (age <= 100, 'The age ' + age + ' is above 100');

    this.name = name;
    this.age = age;
  }
}