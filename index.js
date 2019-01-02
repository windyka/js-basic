const circle = {
  radius: 1
};

circle.color = 'red'; //adding new property of object
circle.draw = function() {}; //add function in object
// return
// {radius: 1, color: "red", draw: ƒ}
// color: "red"
// draw: ƒ ()
// radius: 1

//remove property of an object
delete circle.color; //deleting the color property
delete circle.draw; //deleting the function properti of object
console.log(circle);

//the property of an object is dynamics
// but the variable / name / const is cannot be reasign
