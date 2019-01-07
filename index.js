// Combine and Slicing Arrays With Spread Operator
const first = [1, 2, 3, 4];
const second = [5, 6, 7, 8];

const combined = [...first, 'a', ...second, 'b'];

const copy = [...combined];

console.log(combined);
console.log(copy);
// Output
// (10) [1, 2, 3, 4, "a", 5, 6, 7, 8, "b"]
// (10) [1, 2, 3, 4, "a", 5, 6, 7, 8, "b"]
