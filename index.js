//Logical AND (&&)
//Return true if both operand is true
//Logical OR (||)

console.log(true && true);

// let highIncome = true;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome && goodCreditScore;
// console.log(eligibleForLoan);
// console.log(true && true);

let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligible', eligibleForLoan);

//Logical NOT (!)
let applicationRefused = !eligibleForLoan;
console.log('Aplication Refused', applicationRefused);
