const circle = {
  radius: 1,
  draw() {
    console.log(draw);
  }
};

// We can cloning an object by using :
// 1. Old Way is; -----------STEP 1------------------
// const another = {};
// for (let key in circle) another[key] = circle[key];

// console.log(another);
// output
// {radius: 1, draw: ƒ}
// draw: ƒ draw()
// radius: 1
// __proto__: Object

// by using Object.assign method :---------STEP 2--------

// const another = Object.assign({ color: 'yellow' }, circle);
// console.log(another);
// output
// {color: "yellow", radius: 1, draw: ƒ}

// by using spread operator -----------STEP 3--------------
// to get all property of an object

const another = { ...circle };
console.log(another);
// output
// radius: 1, draw: ƒ}
