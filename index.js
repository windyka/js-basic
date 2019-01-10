// Let vs Var
// Different :

// var => function-scoped
// ES6 (ES2105): let, const => block-scoped

// Explantion 1 ---------------------------------
// function start() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }

// start(); // Output
// // 0
// // 1
// // 2
// // 3
// // 4
// // Uncaught ReferenceError: i is not defined
// //     at start (index.js:7)
// //     at index.js:10
// ----------------------------------------------

// Explanation 2 --------------------------------
// function start() {
//   for (let i = 0; i < 5; i++) console.log(i);

//   console.log(i);
// }

// start(); // Output
// // 0
// // 1
// // 2
// // 3
// // 4
// // Uncaught ReferenceError: i is not defined
// //     at start (index.js:26)
// //     at index.js:29
// ----------------------------------------------

// Explanation 3 --------------------------------
// function start() {
//   for (var i = 0; i < 5; i++) console.log(i);

//   console.log(i);
// }

// start(); // Output
// // index.js:42 0
// // index.js:42 1
// // index.js:42 2
// // index.js:42 3
// // index.js:42 4
// // index.js:44 5
// ----------------------------------------------

// Explanation 4 ---------------------------------
// function start() {
//   for (let i = 0; i < 5; i++) {
//     if (true) {
//       var color = 'red';
//     }
//   }
//   console.log(color); // output => red
// }

// start();
// -----------------------------------------------

// Explanation 5 ---------------------------------
// function start() {
//   for (let i = 0; i < 5; i++) {
//     if (true) {
//       let color = 'red';
//     }
//   }
//   console.log(color);
// }

// start();
// // Output =>
// // Uncaught ReferenceError: color is not defined
// //     at start (index.js:80)
// //     at index.js:83
// -----------------------------------------------

// Global variable behaviour in window object
var color = 'red';
let age = 36;

function sayHello() {
  console.log('Hello');
}
// output
// window.color
// "red"
// window.age
// undefined => this is not the global variable that can't attached in windows
// sayHello
// ƒ sayHello() {
//   console.log('Hello');
// }
