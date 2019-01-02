function showPrimes(limit) {
  for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;

  return true;
}

showPrimes(20);
// return
// 2
// 3
// 5
// 7
// 11
// 13
// 17
// 19
