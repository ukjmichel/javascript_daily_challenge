// Challenge: Unique Characters Checker
// Write a function that checks if a string has all unique characters. If all characters in the string are unique, the function should return true; otherwise, it should return false.

// Requirements:
// The function should be case-sensitive, so 'A' and 'a' are considered different characters.
// You are not allowed to use any additional data structures like arrays or objects to store the characters.
// Example:
// javascript
// Copier le code
// console.log(hasUniqueCharacters("hello")); // false
// console.log(hasUniqueCharacters("world")); // true
// console.log(hasUniqueCharacters("Apple")); // false
// console.log(hasUniqueCharacters("1234567890")); // true
// console.log(hasUniqueCharacters("12345678901")); // false

const hasUniqueCharacters = (w) => {
  for (let i = 0; i < w.length; i++) {
    for (let j = i + 1; j < w.length; j++) {
      if (w[i] === w[j]) {
        return false;
      }
    }
  }
  return true;
};

console.log(hasUniqueCharacters('hello')); // false
console.log(hasUniqueCharacters('world')); // true
console.log(hasUniqueCharacters('Apple')); // false
console.log(hasUniqueCharacters('1234567890')); // true
console.log(hasUniqueCharacters('12345678901')); // false
console.log(hasUniqueCharacters('Ada')); // false
