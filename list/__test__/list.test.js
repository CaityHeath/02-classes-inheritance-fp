'use strict';

// These 2 should be interchangeable!
const List = require('../list-constructor.js');
// const List = require('../list-constructor.js');

describe('List Data Structure', () => {

  it('starts with a length of -1 and an empty data set', () => {
    let stuff = new List();
    expect(stuff.length).toEqual(0);
    expect(stuff.data).toEqual({});
  });

  it('pushes items to the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('b');
  });

});

describe('shift', () => {

  it('removes the first index in an array', () =>{
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.shift();
    expect(stuff.length).toEqual(1);
    expect(stuff.data[1]).toEqual('b');
  });

});

describe('unshift', () => {
 
  it('adds a value to the first index in an array', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.unshift('z');
    expect(stuff.length).toEqual(3);
    expect(stuff.data[0]).toEqual('z');
  });
});