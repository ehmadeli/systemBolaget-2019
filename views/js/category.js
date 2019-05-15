class Category {
 
    constructor(data){
      this.array = JSON.stringify(data).split(",");
      this.array[0] = this.array[0].substr(1);
      this.array[this.array.length -1] = this.array[this.array.length -1].slice(0, -1);
    }
}

if(typeof module === 'object'){
    module.exports = Category;
  }