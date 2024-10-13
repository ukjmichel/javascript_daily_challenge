// Challenge: Sum of Digits Until One Digit
// Problem: Given a non-negative integer num, repeatedly add its digits until the result has only one digit.

// Example:

// javascript
// Copier le code
// Input: 38
// Output: 2
// Explanation: The process is:
// 38 → 3 + 8 = 11
// 11 → 1 + 1 = 2
// Since 2 has only one digit, return 2.

// Input: 1234
// Output: 1
// Explanation: 1 + 2 + 3 + 4 = 10 → 1 + 0 = 1
// Your Task:
// Write a function sumOfDigits that takes an integer as an argument and returns the single-digit sum.

// Rules:
// You can repeatedly sum the digits of the number until a single digit is obtained.
// Avoid using recursion if possible.
// Bonus Tip:
// There’s a mathematical trick for this. If n is a number, then the result is n % 9.
//  But avoid using that for now to practice logic.

const number = 38;

const sumOfDigits = (n) => {
  let sum = n;
  while (sum > 10) {
    digits = String(sum).split('');
    sum = digits.reduce((acc, digit) => acc + Number(digit), 0);
  }
  return sum;
};

console.log(sumOfDigits(number));
