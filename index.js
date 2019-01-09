console.log(sum(1, 2, 3, 4, 5, 6, 9, 10)); // output => 40

function sum() {
  let total = 0;
  for (let value of arguments) total += value;
  return total;
}
