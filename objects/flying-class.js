'use strict';

class FlyingVehicle {
  constructor(name, pilot){
    this.name = name; 
    this.pilot = pilot;
  }

  fly(){
    return 'In the Air';
  }

  land(){
    return 'On the ground';
  }
}

class Airplane extends FlyingVehicle{
  constructor(name){
    super(name, 'emelia');
  };
}

class Helicopter extends FlyingVehicle{
  constructor(name){
    super(name, 'Hanna');
  };
  hover(){
    return 'Wheee!';
  };
} 

module.exports = {Airplane, Helicopter};
