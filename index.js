// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function() {
//     console.log('draw');
//   };
// }

// const Circle1 = new Function(
//   'radius',
//   `
// this.radius = radius
// this.draw = function(){
//     console.log('draw')
// }`
// );

// const circle = new Circle1(1);

// const another = new Circle(1);
// //----------------------Comment Box---------------
// //return ;
// // console write
// // >circle
// // output:
// // {radius: 1, draw: ƒ}
// //-------------------------------------------------

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  };
}

Circle.call({}, 1);
// output ;
// console write
// ƒ Circle(radius) {
//   this.radius = radius;
//   this.draw = function() {
//     console.log('draw');
//   };
// }

// Circle.apply({}, [1]);
// output ;
// console write
// ƒ Circle(radius) {
//   this.radius = radius;
//   this.draw = function() {
//     console.log('draw');
//   };
// }

const another = new Circle(1);
