// Joining Arrays
const numbers = [1, 2, 3, 4];
const joined = numbers.join(',');
console.log(joined);
// Output
// 1,2,3,4

const message = 'This my first message';
const parts = message.split(' ');
console.log(parts);
// output
(4)[('This', 'my', 'first', 'message')];
// 0: "This"
// 1: "my"
// 2: "first"
// 3: "message"
// length: 4
// __proto__: Array(0)

const combined = parts.join('-');
console.log(combined);
// Output
// This-my-first-message
