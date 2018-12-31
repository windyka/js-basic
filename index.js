// 1 = 00000001
// 2 = 00000010
// R OR = 00000011 // = 3
// R AND = 00000000 // = 0

// console.log(1 | 2); //Bitwise OR // return 3
// console.log(1 & 2); //Bitwise AND //return 0

// Read, Write, Execute
// 00000100
// 00000010
// 00000001

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

// let myPermission = 0;
// myPermission = myPermission | readPermission | writePermission;
// console.log(myPermission); //return 6

// let message = myPermission & readPermission ? 'yes' : 'no';
// console.log(message); //return 'yes'

let myPermission = 0;
myPermission = myPermission | writePermission;
console.log(myPermission); //return 2

let message = myPermission & readPermission ? 'yes' : 'no';
console.log(message); //return 'no'
