'use strict';

const SeaCreature = require('../sea-factory.js');

describe('SeaCreatures', () => {

  describe('fish', () => {

    let fish = new SeaCreature.Fish('nemo');

    it('has fins', () => {
      expect(fish.fins).toEqual(2);
    });

    it('can eat', () => {
      expect(fish.eat()).toBeTruthy();
    });

    it('can mate', () => {
      expect(fish.mate()).toBeTruthy();
    });


  });

  describe('lobster', () => {

    let lobster = new SeaCreature.Lobster('red');

    it('has a fins', () => {
      expect(lobster.fins).toEqual(1);
    });

    it('can eat', () => {
      expect(lobster.eat()).toBeTruthy();
    });

    it('can mate', () => {
      expect(lobster.mate()).toBeTruthy();
    });

    it('Can run', () => {
      expect(lobster.run()).toBeTruthy();
    });

  });

});
