/* 

each number is the sum of the two preceding ones.

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,

*/

const fibonacci = (sequence) => {
  const fiboAux = (current) =>
    current < 2 ? current : fiboAux(current - 1) + fiboAux(current - 2);

  const result = [];
  for (let idx = 0; idx < sequence; idx++) {
    result.push(fiboAux(idx));
    console.log(fiboAux(idx));
  }
  return result;
};

fibonacci(10);

console.log("Fibonnacci Array = ", fibonacci(15));
console.log(
  "max number of the fibonacci sequence : ",
  Math.max(...fibonacci(15))
);

const primeNumber = (number) => {
  if (number < 0) return false;
  if (number < 2) return true;

  let flag = true;
  for (let idx = 2; idx < number; idx++) {
    if (number % idx === 0) flag = false;
  }

  return flag;
};

console.log("Prime Number : ");
console.log(primeNumber(37));

console.log("prime numbers from a number");

const primeNumbersList = (endBoundary) => {
  let idx = 0;
  while (idx < endBoundary) {
    if (primeNumber(idx)) {
      console.log(idx);
    }
    idx++;
  }
};

primeNumbersList(100);
