const person = {
  firstName: 'Mosh',
  lastName: 'Hamedani',
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    if (typeof value !== 'string') throw new Error('Value is not a string');

    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

try {
  person.fullName = 'Windy Kurniawan';
} catch (e) {
  alert(e);
}

console.log(person);
// {firstName: "Windy", lastName: "Kurniawan"}
// firstName: "Windy"
// fullName: "Windy Kurniawan"
// lastName: "Kurniawan"
// get fullName: ƒ fullName()
// set fullName: ƒ fullName(value)
// __proto__: Object
