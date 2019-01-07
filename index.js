// Iterating an Array --------
const numbers = [1, 2, 3, 4];

for (let number of numbers) console.log(number);
// output
// 1
// 2
// 3
// 4

numbers.forEach(number => console.log(number));
// Output
// 1
// 2
// 3
// 4

numbers.forEach((number, index) => console.log(index, number));
// Output
// 0 1
// 1 2
// 2 3
// 3 4
