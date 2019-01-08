// Count occurences
const numbers = [1, 2, 3, 4, 1];

const count = countOccurences(numbers, 1);

console.log(count);
// Output
// 0 1 1
// 1 2 1
// 1 3 1
// 1 4 1
// 1 1 1
// 2

function countOccurences(array, searchElement) {
  return array.reduce((accumulator, current) => {
    const occurences = current === searchElement ? 1 : 0;
    console.log(accumulator, current, searchElement);
    return accumulator + occurences;
  }, 0);
}
