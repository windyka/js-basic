const circle = {
  radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius;
  }
};

console.log(circle.area);
// output
// index.js:8 => 3.141592653589793
