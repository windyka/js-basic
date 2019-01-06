// let address = createAddress('a', 'b', 'c');
let address = new Address('a', 'b', 'c');

function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode
  };
}

function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

console.log(address);
// output
// Address {street: "a", city: "b", zipCode: "c"}
