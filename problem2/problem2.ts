const sequence: number[] = [];
let sum = 0;

function condition(sequence: number[]): boolean {
  const limit = 4000000;
  // 配列が要素数が0, 1だったらtrueを返す
  return sequence.length < 2 || sequence[sequence.length - 1] < limit;
}

while (condition(sequence)) {
  let newValue: number;
  if (sequence.length === 0) {
    newValue = 1;
  } else if (sequence.length === 1) {
    newValue = 2;
  } else {
    newValue = sequence[sequence.length - 2] + sequence[sequence.length - 1];
  }

  if (newValue % 2 === 0) {
    sum = sum + newValue;
  }
  sequence.push(newValue);
}

console.log(sum);

export {};
