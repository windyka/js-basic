// Testing the Element of an Array
// with .every()
const numbers = [1, 2, 3, 4];
const allPositive = numbers.every(value => {
  return value >= 0;
});

console.log(allPositive);
// output
// true

// with .some()
const numSelected = [-1, -2, -3, -4];
const value = numSelected.some(value => {
  return value < 0;
});

console.log(value);
