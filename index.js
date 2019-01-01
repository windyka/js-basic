let i = 0;
{
  while (i < 5) i++; //if you comment this (i++) you will got infinitely loops
  console.log(i);
}

console.log('-------another logging------');

let x = 0;
do {
  x++; //if you comment this (i++) you will got infinitely loops
  console.log(x);
} while (x < 5);

// for (let i = 0 ; i > 0; i++)//this output return to infinitely loops

// for (let i = 0; i < 10; )//this output return to infinitely loops
