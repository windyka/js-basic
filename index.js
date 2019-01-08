// Count occurences
const numbers = [1, 2, 3, 4, 1];

const max = getMax([1, 3, 5]);

console.log(max);
// Output
// 5

function getMax(array) {
  if (array.length === 0) return undefined;

  return array.reduce((a, b) => (a > b ? a : b));
}
