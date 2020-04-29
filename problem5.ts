// https://projecteuler.net/problem=5

let minValue: number = 20;

while (!judgment(minValue)) {
  minValue = minValue + 20;
}

function judgment(minValue: number): boolean {
  return (
    minValue % 11 === 0 &&
    minValue % 12 === 0 &&
    minValue % 13 === 0 &&
    minValue % 14 === 0 &&
    minValue % 15 === 0 &&
    minValue % 16 === 0 &&
    minValue % 17 === 0 &&
    minValue % 18 === 0 &&
    minValue % 19 === 0 &&
    minValue % 20 === 0
  );
}

console.log(minValue);
