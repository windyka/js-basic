// Searching Element with Includes(function(array, target))
const numbers = [1, 2, 3, 4];

const output = except(numbers, [1, 2]); // false

console.log(output); // (2) [3, 4]

function except(array, excluded) {
  const output = [];
  for (let element of array)
    if (!excluded.includes(element)) output.push(element);
  return output;
}
