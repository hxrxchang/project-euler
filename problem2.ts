// https://projecteuler.net/problem=2
const limit = 4000000;
let firstTerm: number = 1;
let secondTerm: number = 2;
// 最初の二つの要素は決定しているためすでに2を入れている
let sumOfEvenTerm = 2;

while (firstTerm + secondTerm < limit) {
  const newTerm = firstTerm + secondTerm;
  if (newTerm % 2 === 0) {
    sumOfEvenTerm = sumOfEvenTerm + newTerm;
  }
  firstTerm = secondTerm;
  secondTerm = newTerm;
}

console.log(sumOfEvenTerm);