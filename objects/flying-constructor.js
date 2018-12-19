'use strict';

const FlyingVehicle = function(name, pilot) {
  this.name = name;
  this.pilot = pilot;
  this.fly = function() {
    return 'In the Air';
  },
  this.land = function() {
    return 'On the ground';
  };
};

FlyingVehicle.prototype.fly = () => {
  return 'In the Air';
};

FlyingVehicle.prototype.land = () => {
  return 'On the ground';
};

// Car Constructor
const Airplane = function(name) {
  FlyingVehicle.call(this, name,'emilia');
};

Airplane.prototype = new FlyingVehicle();

const Helicopter = function(name) {
  FlyingVehicle.call(this, name,'Hanna');
};

Helicopter.prototype = new FlyingVehicle();

Helicopter.prototype.hover = () => {
  return 'phrrr!';
};

module.exports = {Airplane, Helicopter};
