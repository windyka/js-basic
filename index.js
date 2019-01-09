// Rest Operator
function argue(args) {
  console.log(args);
}

console.log(argue(1, 2, 3, 4, 5, 6, 9, 10));
// output
// (8) [1, 2, 3, 4, 5, 6, 9, 10]
// 0: 1
// 1: 2
// 2: 3
// 3: 4
// 4: 5
// 5: 6
// 6: 9
// 7: 10
// length: 8
// __proto__: Array(0)
// -------------------------------------------------

// sum an array with Reduce method
// function sum(...arg) {
//   return arg.reduce((a, b) => a + b);
// }

// console.log(sum(1, 2, 3, 4, 5));
// output
// 15

// function sum(discount, ...prices) {
//   const total = prices.reduce((a, b) => a + b);
//   return total * (1 - discount);
// }

// console.log(sum(0.1, 20, 30));
// // output
// // 45
// -----------------------------------------------

function sum(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}

console.log(sum(0.1, 20, 30)); // output => 45
