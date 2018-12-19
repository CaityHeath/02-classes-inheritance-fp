'use strict';


//const Vehicle = require('./constructor.js');
//const Vehicle = require('./class.js');
// const Vehicle = require('./factory.js');
//const FlyingVehicle = require('./flying-constructor.js');
//const FlyingVehicle = require('./flying-factory.js');
const SeaCreature = require('./sea-factory.js');



// Implement a car and motorcycle
// const mazda = new Vehicle.Car('Mazda 3');
// console.log(mazda.name, mazda.drive(), mazda.stop());

// const harley = new Vehicle.Motorcycle('Harley');
// console.log(harley.name, harley.wheelie(), harley.stop());

// const memphisbelle = new FlyingVehicle.Airplane('B-17');
// console.log(memphisbelle.name, memphisbelle.fly(), memphisbelle.land());

// const mister = new FlyingVehicle.Helicopter('boeing');
// console.log(mister.name, mister.fly(), mister.land(), mister.hover());

// const nemo = new SeaCreature.Fish('clown');
// console.log(nemo.name, nemo.fins, nemo.eat(), nemo.mate());

const red = new SeaCreature.Lobster('red lobster');
console.log(red.name, red.fins, red.eat(), red.mate(), red.run());