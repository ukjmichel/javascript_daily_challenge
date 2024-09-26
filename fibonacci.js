// JavaScript Daily Challenge: Fibonacci Sequence
// Problem:

// Write a JavaScript function that generates the Fibonacci sequence up to a given number of terms.
// The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones,
// starting from 0 and 1.

const fibonacciGenerator = (n) => {
  let fibonacciArray = [0, 1];
  for (let i = 0; fibonacciArray.length < n; i++) {
    fibonacciArray.push(fibonacciArray[i] + fibonacciArray[i + 1]);
  }
  return fibonacciArray;
};

console.log(fibonacciGenerator(10));
