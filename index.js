//Falsy (false)
//undefined
//null
//0
//false
//''
//NaN

//Anytjing that is not Falsy -> Truthy
//Short-circuiting

false || true; //return true
false || 'Mosh'; //return 'Mosh'
false || 1; //return 1
false || 1 || 2; //return 1

// let userColor = 'red';
// let defaultColor = 'blue';
// let currentColor = userColor || defaultColor;
// console.log(currentColor); //return 'red'

let userColor = null;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor); //return 'blue'
