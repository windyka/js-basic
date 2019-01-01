let i = 0;

// while (i <= 10) {
//   if (i === 5) break;
//   // if (i % 2 === 0) {
//   //   i++;
//   //   continue;
//   // }
//   console.log(i); // return 1, 2, 3, 4
//   i++;
// }

while (i <= 10) {
  if (i % 2 === 0) {
    i++;
    continue;
  }
  console.log(i); //return 1, 3, 5, 7, 9
  i++;
}
