// Challenge: Array Chunking
// Description:

// Write a function called chunkArray that takes two parameters:an array and a size (number).
// The function should divide the array into chunks of the specified size and return a new array containing the chunks.

// Example:

// javascript
// Copier le code
// chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
// // Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// chunkArray([1, 2, 3, 4, 5], 2);
// // Output: [[1, 2], [3, 4], [5]]

const chunkArray = (arr, size) => {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(chunkArray([1, 2, 3, 4, 5], 2));
