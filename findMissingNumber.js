// Challenge: Find the Missing Number
// Task: Write a function called findMissingNumber
// that takes an array of integers from 0 to n (inclusive)
// and returns the missing number.
// The array will have a length of n,
// which means one number from 0 to n is missing.

const findMissingNumber = (numbers) => {
  if (checkArrayValidity(numbers)) {
    const n = numbers.length;
    const expectedSum = Math.floor((n * (n + 1)) / 2);
    const actualSum = numbers.reduce((acc, current) => acc + current, 0);
    return `the missing number is ${expectedSum - actualSum}`;
  } else {
    return 'invalid input';
  }
};

const checkArrayValidity = (array) => {
  if (!Array.isArray(array)) {
    console.log('not an array');
    return false;
  } else if (array.length <= 0) {
    console.log('no numbers in the array');
    return false;
  } else {
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] !== 'number') {
        console.log('not an array of numbers');
        return false;
      }
    }
  }

  return true; // If all checks pass
};

const array1 = [0, 1, 2, 3, 4, 5];
const array2 = [0, 1, 2, 4];
const array3 = [0, 1];

console.log(findMissingNumber(array1));
console.log(findMissingNumber(array2));
console.log(findMissingNumber(array3));
