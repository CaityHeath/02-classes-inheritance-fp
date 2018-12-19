'use strict';


const SeaCreature = () => ({
  eat: () =>{
    return 'yum';
  },

  mate: () => {
    return 'makin baby sea creatures';
  },
});

function Fish(name) {
  let Fish = Object.assign(
    {},
    {name},
    {fins: 2},
    SeaCreature()
  );
  return Fish;
}

function Lobster(name){
  let lobster = Object.assign(
    {},
    {name},
    {fins: 1},
    SeaCreature(),
    {run}
  );

  function run() { 
    return 'Whee!'; 
  }

  return lobster;
}

module.exports = {Fish, Lobster};


