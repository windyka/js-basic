//increment output
for (let i = 0; i < 5; i++) {
  console.log('Hello World!', i);
}

//modulus output odd number
for (let i = 0; i <= 10; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

console.log('--------------------');

//modulus output even number
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.log('--------------------');

//decrement output
for (let i = 10; i >= 0; i--) {
  console.log(i);
}
