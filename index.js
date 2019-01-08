// Mappping an Array

const numbers = [1, 2, -1, 3, 4];

const items = numbers
  .filter(n => n >= 0)
  .map(n => ({ value: n }))
  .filter(obj => obj.value > 1)
  .map(obj => obj.value);

console.log(items);
// output
// (3) [2, 3, 4]
// 0: 2
// 1: 3
// 2: 4
// length: 3
// __proto__: Array(0)
