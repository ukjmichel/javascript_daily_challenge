// Binary Search Algorithm Challenge
// Challenge: Write a function that takes a sorted array of integers and a target value.
// The function should implement the binary search algorithm to find the target and return its index.
// If the target is not found, return -1.

// Requirements
// The function should accept two arguments: a sorted array of integers and a target integer.
// Use the binary search approach to achieve a time complexity of
// 𝑂 (log𝑛)
// O(logn).
// If the target is found, return its index.
// If the target is not found, return -1.

const binarySearch = (arr = [], target = 0) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Target found at mid index
    } else if (arr[mid] < target) {
      left = mid + 1; // Move to the right half
    } else {
      right = mid - 1; // Move to the left half
    }
  }

  return -1; // Target not found
};

console.log(binarySearch([1, 2, 3, 4, 5], 1)); // Output: 0
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // Output: 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // Output: -1
console.log(binarySearch([10, 20, 30, 40, 50, 60], 30)); // Output: 2
console.log(binarySearch([], 5)); // Output: -1 (empty array)
