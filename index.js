// Moving element
const numbers = [1, 2, 3, 4];

const output = move(numbers, 1, 2); // false

console.log(output); // (4) [1, 3, 4, 2]

function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.log('Invalid offset');
    return;
  }

  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(position, 0, element);
  return output;
}
