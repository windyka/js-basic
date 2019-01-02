// Factory Function

function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log('draw');
    }
  };
}

const myCircle = createCircle(1);

// Constructor Function in object
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.draw('draw');
  };
}

const circle = new Circle(1);
