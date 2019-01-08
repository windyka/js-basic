// Searching Element with Includes(function(array, target))
const numbers = [1, 2, 3, 4];

console.log(includes(numbers, -1)); // false

function includes(array, searchElement) {
  for (let element of array) if (element === searchElement) return true;
  return false;
}
