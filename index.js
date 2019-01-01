//for in
const person = {
  name: 'Wind',
  age: 35
};

// for (let key in person) console.log(key);
// // return name, age

// // using Dot Notation
// person.name;

// // using Bracket Notation
// person['name'];

for (let key in person) console.log(key, person[key]);
// Return -> name Wind
//        -> age 35

console.log('------Line logging Separator------');

let colors = ['red', 'green', 'blue'];
for (let color of colors) console.log(color);
