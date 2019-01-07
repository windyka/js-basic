// --------------Removing Elements---------//
const numbers = [1, 2, 3, 4];

// // End
// const last = numbers.pop();
// console.log(numbers);
// // Output
// // (3) [1, 2, 3]

// // First
// const first = numbers.shift();
// console.log(numbers);
// // Output
// // (2) [2, 3]

// Middle
const middle = numbers.splice(2, 1);
console.log(numbers);
// Output
// (3) [1, 2, 4]

const twiceMiddle = numbers.splice(2, 3);
console.log(numbers);
// Output
// (2) [1, 2]
