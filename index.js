//Difference of Function Declaration and Function Expression
// in Function Declaration we can call the function before -
// it definitions

// Example

walk(); // Output => walk
function walk() {
  console.log('walk');
}

//==============================
// we cannot call Function Expressional syntax before it's definited

// Example
run(); // output => Uncaught ReferenceError: run is not defined

const run = function() {
  console.log('run');
};

const move = run;

run();
move();
