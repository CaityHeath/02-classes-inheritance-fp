'use strict';

class SeaCreature {
  constructor(name, fins){
    this.name = name; 
    this.fins = fins;
  }

  eat(){
    return 'yum';
  }

  mate(){
    return 'makin sea babies';
  }
}

class Fish extends SeaCreature{
  constructor(name){
    super(name, 2);
  }
}

class Lobster extends SeaCreature{
  constructor(name){
    super(name, 1);
  }
  run(){
    return 'Wheee!';
  }
} 

module.exports = {Fish, Lobster};
