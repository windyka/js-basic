const person = {
  firstName: 'Mosh',
  lastName: 'Hamedani',
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

person.fullName = 'Windy Kurniawan';

console.log(person);
// {firstName: "Windy", lastName: "Kurniawan"}
// firstName: "Windy"
// fullName: "Windy Kurniawan"
// lastName: "Kurniawan"
// get fullName: ƒ fullName()
// set fullName: ƒ fullName(value)
// __proto__: Object
