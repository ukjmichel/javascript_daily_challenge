// Challenge: Sum of Unique Elements
// Problem Statement:
// You are given an array of integers.
// Your task is to write a function that returns the sum of all unique elements in the array.
// An element is considered unique if it only appears once in the array.

// Example:
// javascript
// Copier le code
// Input: [1, 2, 3, 2, 4, 1]
// Output: 7
// Explanation: The unique elements are [3, 4], and their sum is 3 + 4 = 7.

// Instructions:
// Define a function named sumOfUnique(numbers) that takes an array of integers as input.
// Identify the unique elements in the array (i.e., the elements that appear exactly once).
// Return the sum of these unique elements.

const sumOfUnique = (numbers) => {
  let numFrequency = {};

  // Count the frequency of each number
  numbers.forEach((num) => {
    if (numFrequency[num]) {
      numFrequency[num] += 1;
    } else {
      numFrequency[num] = 1;
    }
  });

  // Filter out the unique numbers
  const uniqueNumbers = numbers.filter((num) => numFrequency[num] === 1);

  // Sum the unique numbers
  return uniqueNumbers.reduce((acc, num) => acc + num, 0);
};

console.log(sumOfUnique([1, 2, 3, 2, 4, 1])); // Output: 7
console.log(sumOfUnique([5, 5, 5, 7])); // Output: 7
console.log(sumOfUnique([1, 2, 3])); // Output: 6
