'use strict';

function List() {
  this.length = 0;
  this.data = {};
}
/**
 * Add item to the end of the list
 * @param item
 */
List.prototype.push = function(item) {
  this.data[this.length] = item;
  this.length++;
};

/**
 * // Remove an item from the end of the list and return it's value
 * @returns {*}
 */
List.prototype.pop = function() {
  let returnValue = this.data[this.length];
  delete this.data[this.length];
  this.length--;
  return returnValue;
};

List.prototype.shift = function() {
  delete this.data[0];
  this.length--;
};

List.prototype.unshift = function(item){
  let temp1 = item;
  let temp2 = this.data[0];
  this.data[0] = temp1;
  for(let i = 1; i <= this.length; i++){
    temp1 = this.data[i];
    this.data[i] = temp2;
    temp2 = temp1;
  }
  this.length++;
};

// let stuff = new List();
// stuff.push('a');
// stuff.push('b');
// stuff.shift(); 
// console.log(stuff);


module.exports = List;
