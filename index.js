let a = 10;
let b = 20;

let c = a;
a = b;
b = c;

console.log(a); //return 20
console.log(b); //return 10
