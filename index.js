const courses = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }];

// const course = courses.find(function(course) {
//   return course.name === 'b';
// });

// console.log(course);
// // output
// // {id: 2, name: "b"}

// // ------------findIndex(function(element){...})------
// const course = courses.findIndex(function(course) {
//   return course.name === 'bcx';
// });

// console.log(course);
// // output
// // -1

const course = courses.findIndex(function(course) {
  return course.name === 'b';
});

console.log(course);
// output
// 1
