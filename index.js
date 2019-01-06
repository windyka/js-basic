// Address Object

let address = {
  street: 'a',
  city: 'b',
  zipCode: 'c'
};

function showAddress(address) {
  for (let key in address) console.log(key, address[key]);
}

showAddress(address);
// output
// street a
// city b
// zipCode c
