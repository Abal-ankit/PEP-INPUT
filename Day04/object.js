// Object literal enhancement => grouping global variables into an object;

const name1 = "ankit";
const color = "blue";
const age = 21;

const msg = function () { console.log("hello " + this.name1)};

const person1 = {name1, color, age};

console.log(person1); // { name: 'ankit', color: 'blue', age: 21 }

const person2 = {name1, color, age, msg}; // a function can be part of the object.

person2.msg(); // this is how you can call a function declared within the object.
