// Adding new element of array
const number = [3, 4];

// from end
number.push(5, 6);
console.log(number);

// from beginning
number.unshift(1, 2);
console.log(number);

// from middle
number.splice(2, 0, 'a', 'b');
console.log(number);

// output
// (4) [3, 4, 5, 6]
// (6) [1, 2, 3, 4, 5, 6]
// (8) [1, 2, "a", "b", 3, 4, 5, 6]
