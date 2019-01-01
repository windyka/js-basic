function showNumber(limit) {
  for (let i = 0; i <= limit; i++) {
    if (i % 2 === 0) console.log(i, 'Even');
    else console.log(i, 'Odd');
  }
}

showNumber(10);
// return ;
// 0 "Even"
// 1 "Odd"
// 2 "Even"
// 3 "Odd"
// 4 "Even"
// 5 "Odd"
// 6 "Even"
// 7 "Odd"
// 8 "Even"
// 9 "Odd"
// 10 "Even"

function showNumber(limit) {
  for (let i = 0; i <= limit; i++) {
    const message = i % 2 === 0 ? 'EVEN' : 'ODD';
    console.log(i, message);
  }
}

// return ;

// 0 "EVEN"
// 1 "ODD"
// 2 "EVEN"
// 3 "ODD"
// 4 "EVEN"
// 5 "ODD"
// 6 "EVEN"
// 7 "ODD"
// 8 "EVEN"
// 9 "ODD"
// 10 "EVEN"
