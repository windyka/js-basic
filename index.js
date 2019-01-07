// Combine and Slicing Arrays
const first = [1, 2, 3, 4];
const second = [5, 6, 7, 8];

// Concat Method
const combined = first.concat(second);
console.log(combined);
// Output
// (8) [1, 2, 3, 4, 5, 6, 7, 8]

// Slice Method
const slice = combined.slice();
console.log(slice);
// Output
// (8) [1, 2, 3, 4, 5, 6, 7, 8]

// Combining type reference of Object
const third = [{ id: 1 }];
const fourth = [5, 6, 7, 8];

const otherCombined = third.concat(fourth);
third[0].id = 10;
console.log(otherCombined);
// Output
// (5) [{…}, 5, 6, 7, 8]
// 0: {id: 10}
// 1: 5
// 2: 6
// 3: 7
// 4: 8
// length: 5
// __proto__: Array(0)
