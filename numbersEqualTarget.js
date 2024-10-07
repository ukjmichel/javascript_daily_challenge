// Challenge: Find the Two Numbers That Add Up to a Target
// Given an array of integers nums and an integer target,
// return the indices of the two numbers such that they add up to the target.
// Assume that there is exactly one solution, and you may not use the same element twice.

// Example 1:
// javascript
// Copier le code
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: Because nums[0] + nums[1] == 9, return [0, 1].
// Example 2:
// javascript
// Copier le code
// Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]
// Example 3:
// javascript
// Copier le code
// Input: nums = [3, 3], target = 6
// Output: [0, 1]
// Your Task:
// Write a function twoSum(nums, target)
// that returns an array of the indices of the two numbers.

const numbersEqualTarget = (numbers, target) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log(numbersEqualTarget([2, 7, 11, 15],9));
console.log(numbersEqualTarget([3, 2, 4],6));
console.log(numbersEqualTarget([3, 3],6));

