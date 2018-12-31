let person = {
  name: 'Wind',
  age: 35
};
//using Dot Notation
person.name = 'John';

//using Bracket Notation
person['name'] = 'Marry';

//using Bracket Notation II
let selection = 'name';
person[selection] = 'Marry';

console.log(person.name);
