'use strict';

const FlyingVehicle = require('../flying-constructor.js');

xdescribe('Flying Vehicles', () => {

  xdescribe('plane', () => {

    let airplane = new FlyingVehicle.Airplane('bird');

    it('has a pilot', () => {
      expect(airplane.pilot).toEqual('emilia');
    });

    it('can fly', () => {
      expect(airplane.fly()).toBeTruthy();
    });

    it('can land', () => {
      expect(airplane.land()).toBeTruthy();
    });


  });

  xdescribe('Helicopter', () => {

    let helicopter = new FlyingVehicle.Helicopter('chop');

    it('has a pilot', () => {
      expect(helicopter.pilot).toEqual('Hanna');
    });

    it('can fly', () => {
      expect(helicopter.fly()).toBeTruthy();
    });

    it('can land', () => {
      expect(helicopter.land()).toBeTruthy();
    });

    it('Can hover', () => {
      expect(helicopter.hover()).toBeTruthy();
    });

  });

});
