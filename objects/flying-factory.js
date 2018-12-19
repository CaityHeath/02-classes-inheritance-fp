'use strict';


const FlyingVehicle = () => ({
  fly: () =>{
    return 'In the Air';
  },

  land: () => {
    return 'On the ground';
  },
});

function Airplane(name) {
  let airplane = Object.assign(
    {},
    {name},
    {pilot: 'emilia'},
    FlyingVehicle()
  );
  return airplane;
}

function Motorcycle(name){
  let helicopter = Object.assign(
    {},
    {name},
    {pilot: 'Hanna'},
    FlyingVehicle(),
    {hover}
  );

  function hover() { 
    return 'Phrrr!'; 
  }

  return helicopter;
}

module.exports = {Airplane, Motorcycle};


