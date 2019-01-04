const circle = {
  radius: 1,
  draw() {
    console.log(draw);
  }
};

for (let key in circle) console.log(key, circle[key]);
for (let key of Object.keys(circle)) console.log(key);
// output
// radius 1
// draw ƒ draw() {
//     console.log(draw);
//   }
//   radius
//   draw

for (let entry of Object.entries(circle)) console.log(entry);
// output
// (2) ["radius", 1]
// 0: "radius"
// 1: 1
// length: 2
// __proto__: Array(0)
// (2) ["draw", ƒ]
// 0: "draw"
// 1: ƒ draw()
// length: 2
// __proto__: Array(0)

if ('radius' in circle) console.log('yes');
// output
// yes

// Simple way to enumerate the property in an object is using for in loop, but can also for of loop along with Object.keys and Object.entries
// and we use the in operator to see if a given property or method
