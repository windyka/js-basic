// Local vs Global Scope

// Global Scope
// const name = 'Wind';

// function calledName() {
//   console.log(name); // output => Wind
// }

// calledName();

// Local scope
const name = 'Wind';

function calledName() {
  const name = 'Kurniawan';
  console.log(name); // Output => Kurniawan
}

calledName();

// Local Scope are take precedence over global scope.
