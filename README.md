![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Lab: Classes, Inheritance & Functional Programming

### Author: Caity Heath

### Links and Resources
* [repo](https://github.com/CaityHeath/02-classes-inheritance-fp)
* [travis](https://www.travis-ci.com/CaityHeath/02-classes-inheritance-fp)


### Object and Class Modules
#### There are 3 object implementation patterns used for this lab:
<ul>
  <li> Constructor Functions
  <li> JavaScript Classes
  <li> Factory Functions
</ul>

There are three parent Objects constructed and two child object which inherit properties and methods from the parent object.  All objects are implemented with each pattern.

<ul>
  <li> Vehicle
  <ul><li>Car
      <li>Motorcycle
  </ul>
  <li> FlyingVehicle
    <ul><li>Airplane
      <li>Helicopter
  </ul>
  <li> SeaCreature
  <ul><li>Fish
      <li>Lobster
  </ul>
</ul>

I have written tests to check the implementation of each parent and child object and the inherited and unique methods associated with them. 


###### `motorcycle.drives() -> 'I'm moving'`
An example test would be on motorcycle's drive method. My test expects `motorcycle.drive()` to be equal to a truthy value. 



### List Modules
This portion of the repository lives within a folder called list. Inside that folder is an index.js file, a test folder and a list-constructor.js file. In the list-constructor.js file I have written code to treat an object list like an array and re-write core Array methods. I did not use any built in array methods. I implemented the following methods on my list constructor:

<ul>
  <li> push
  <li> pop
  <li> shift
  <li> unshift
</ul>

Of those 4 methods I wrote tests for push, shift and unshift. 



### Setup
In order to run tests on these modules you will need to clone my repository by running the following  command: <br>
`git clone https://github.com/CaityHeath/02-classes-inheritance-fp.git`

Then install Node modules by running: <br>
`npm i `

You can also look at the test logs which are available in the travis link. 

#### Running the tests
* `npm test`

#### Entry point
* `node index.js`

