// Sorting Arrays -------------

const courses = [{ id: 1, name: 'Node.js' }, { id: 2, name: 'javascript' }];

courses.sort((a, b) => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});
console.log(courses);
// Output
// (2) [{…}, {…}]
// 0: {id: 2, name: "javascript"}
// 1: {id: 1, name: "Node.js"}
// length: 2
// __proto__: Array(0)

//--------------------MDN--------------------
// If compareFunction is supplied, all non-undefined array elements are sorted according to the return value of the compare function (all undefined elements are sorted to the end of the array, with no call to compareFunction). If a and b are two elements being compared, then:

// If compareFunction(a, b) is less than 0, sort a to an index lower than b (i.e. a comes first).
// If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements. Note: the ECMAscript standard does not guarantee this behaviour, and thus not all browsers (e.g. Mozilla versions dating back to at least 2003) respect this.
// If compareFunction(a, b) is greater than 0, sort b to an index lower than a (i.e. b comes first).
// compareFunction(a, b) must always return the same value when given a specific pair of elements a and b as its two arguments. If inconsistent results are returned then the sort order is undefined.
// So, the compare function has the following form:

// function compare(a, b) {
//   if (a is less than b by some ordering criterion) {
//     return -1;
//   }
//   if (a is greater than b by the ordering criterion) {
//     return 1;
//   }
//   // a must be equal to b
//   return 0;
// }
