// // Factory Function
// function createCircle(radius) {
//   return {
//     radius,
//     draw: function() {
//       console.log('draw');
//     }
//   };
// }

// const circle = createCircle(1);

// //Constructor Function
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function() {
//     console.log('draw');
//   };
// }

// const another = new Circle(1);

//--------------Comment Box-------------------
//console write;
//> another.constructor + click enter
//output
// <.ƒ Circle(radius) {
//   this.radius = radius;
//   this.draw = function() {
//     console.log('draw');
//   };
// }

//console write;
// >circle.constructor + click enter
// output
// ƒ Object() { [native code] }
//------------------------------------------------

let x = {};
// let x = new Object()

new String(); // '', "", ``
new Boolean(); // true, false
new Number(); // 1,2 3
