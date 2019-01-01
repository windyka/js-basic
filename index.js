let i = 0;
do {
  if (i % 2 != 0) console.log(i); //return 1, 3, 5
  i++;
} while (i <= 5);

//how if the conditions is false statement?
let x = 9;
do {
  if (x % 2 != 0) console.log(x); //return 9 //only this executed
  x++; //not executed
} while (x <= 5); //false statement never executed
