// Difference between value types and reference types in javascript

let x = 10;
let y = x;

x = 20;
console.log(x); // output 20
console.log(y); // output 10
// value(primitives) are completely independent

let m = { value: 10 };
let n = m;

console.log(m.value); // output 10
console.log(n.value); // output 10
// reference object is copied by their reference
// every changes is always visible by the other reference

let number = 10;

function increase(number) {
  number++;
}

increase(number);
console.log(number); // output 10

let increment = 10;

function adding(increment) {
  increment++;
  console.log(increment); // output 11
}

adding(increment);

let obj = { value: 100 };

function detecting(obj) {
  obj.value++;
}

detecting(obj);
console.log(obj); // output {value : 101}
