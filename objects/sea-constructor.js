'use strict';

const SeaCreature = function(name, fins) {
  this.name = name;
  this.fins = fins;
  this.eat = function() {
    return 'yum';
  },
  this.mate = function() {
    return 'makin baby sea creature';
  }
};

SeaCreature.prototype.eat = () => {
  return 'yum';
};

SeaCreature.prototype.mate = () => {
  return 'makin baby sea creature';
};

// Car Constructor
const Fish= function(name) {
  SeaCreature.call(this, name, 2);
};

Fish.prototype = new SeaCreature();

const Lobster = function(name) {
  SeaCreature.call(this, name, 1);
};

Lobster.prototype = new SeaCreature();

Lobster.prototype.run = () => {
  return 'running around!';
};

module.exports = {Fish, Lobster};
