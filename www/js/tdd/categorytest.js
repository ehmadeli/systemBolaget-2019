let assert = require('assert');
let Category = require('../category.js');
let data = require('../../json/categories.json');

module.exports = class CategoryTest {
       
testCategoryNames(){
    let category = new Category(data);

    //Test Only
    //console.log(category.array[0]);
    //console.log(category.array[category.array.length -1]);

    for(let i=0; i<category.array.length; i++){
        assert (typeof category.array[i] == 'string', 'The Category entry   is not a string');
        assert.notEqual(category.array[i], undefined, "The category entry with no name exist");
        assert.notEqual(category.array[i], '', "The category entry with empty name exist");
       // console.log(category.array[i]);
    }    

   
 }
 }