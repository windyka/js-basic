function walk() {
  console.log('walk');
}

const run = function() {
  console.log('run');
};

const move = run;

walk();
run();
move();
