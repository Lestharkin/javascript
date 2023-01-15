"use strict";

console.log('# Variables');

var oldVariable = 'old varible';
console.log('oldVariable => '+ oldVariable);

oldVariable = 20;
console.log('oldVariable => '+ oldVariable);

oldVariable = true;
console.log('oldVariable => '+ oldVariable);

var oldPrototype = 123, name = 'old', lastname = "varible";

console.log(oldPrototype.name);


let vnueva = 'JavaScript ES6';
console.log(vnueva);

const cnueva = 'reference operator';
console.log(cnueva);

const object = {
    name: "pepe",
    lastname: "perez",
};

console.log(`${object.name} ${object.lastname}`);

let variable = 123;
console.log(variable);
variable = 'abc';
console.log(variable);
variable = "strings";
console.log(variable);
variable = true;
console.log(variable);
variable = false;
console.log(variable);

const constVariable = 'this is a const variable';
// constante = 123;
console.log(constVariable);

object.name = "juan";
console.log(object);


function hola() {
    console.log("ok");
    console.log("hello");
    console.log("world");
}