// Challenge: Flatten a Nested Array
// Write a function that takes an array which may contain nested arrays and returns a new "flattened" array with all elements at the same level.

// Example:
// javascript
// Copier le code
// Input: [1, [2, 3], [4, [5, 6]], 7]
// Output: [1, 2, 3, 4, 5, 6, 7]

// Input: [1, [2, [3, [4]]]]
// Output: [1, 2, 3, 4]
// Instructions:
// Create a function flattenArray(arr) that accepts a nested array.
// Return a new array that is completely flattened (i.e., no nested arrays remain).
// Do not use Array.prototype.flat() (as that would make it too easy!).

const flattenArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // Flatten the nested array and spread it back into the original array
      arr.splice(i, 1, ...flattenArray(arr[i])); //arr.splice(startIndex, deleteCount, item1, item2, ..., itemN)
      i--; // Decrement i to check the newly flattened elements
    }
  }
  return arr;
};

// Test the function
console.log(flattenArray([1, [2, 3], [4, [5, 6]], 7])); // Output: [1, 2, 3, 4, 5, 6, 7]
console.log(flattenArray([1, [2, [3, [4]]]])); // Output: [1, 2, 3, 4]

// Components of the Line:
// arr.splice(i, 1, ...):

// The splice method is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// Parameters:
// The first parameter (i) specifies the index at which to start changing the array.
// The second parameter (1) indicates the number of elements to remove starting from the index i.
// The third parameter (in this case, ...flattenArray(arr[i])) specifies the elements to add to the array starting from index i.
// The ... (spread operator) allows you to expand an array into individual elements.
// flattenArray(arr[i]):

// This is a recursive call to the flattenArray function, which is designed to flatten nested arrays.
// Here, arr[i] refers to the current element in the array arr that is being checked. If this element is itself an array,
// flattenArray(arr[i]) will return a new flattened version of that array.
// ... (Spread Operator):

// The spread operator (...) takes an iterable (like an array) and expands it into individual elements. So,
// if flattenArray(arr[i]) returns an array, the spread operator will take each element from that array and insert them as individual arguments into the splice method.
// For example, if flattenArray(arr[i]) returns [5, 6], then ...flattenArray(arr[i]) will effectively insert 5 and 6 into the splice method call.
