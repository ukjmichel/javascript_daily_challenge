// Challenge: Replace Each Letter with the Next in the Alphabet
// Objective:
// Write a function that takes a string as input and returns a new string
// where each letter has been replaced by the next letter in the alphabet.
// If the letter is 'z' or 'Z', it should wrap around to 'a' or 'A' respectively.
// Non-letter characters (like punctuation, spaces, and numbers) should remain unchanged.

// Example Input:

// javascript
// Copier le code
// "hello world!"
// Example Output:

// javascript
// Copier le code
// "ifmmp xpsme!"
// Instructions:

// Create a function shiftLetters that accepts a string as an argument.
// Inside the function, iterate through each character of the string.
// For each character, if it's a letter, replace it with the next letter in the alphabet.
// Maintain the case of each letter (uppercase stays uppercase, lowercase stays lowercase).
// Return the new transformed string.
// Bonus:
// Try to solve this challenge without using any external libraries.

//ASCII CODE: A-Z -> 65-90  a-z-> 97 -> 122

const shiftLetters = (s) => {
  let shiftString = '';
  for (let i = 0; i < s.length; i++) {
    let charCode = s.charCodeAt(i);
    if (
      (charCode >= 65 && charCode < 90) ||
      (charCode >= 97 && charCode < 122)
    ) {
      shiftString += String.fromCharCode(charCode + 1);
    } else if (charCode === 90 || charCode === 122) {
      shiftString += String.fromCharCode(charCode - 25);
    } else {
      shiftString += s[i];
    }
  }
  return shiftString;
};

console.log(shiftLetters('hello world!')); // Output: "ifmmp xpsme!"
console.log(shiftLetters('Zebra')); // Output: "Afcsb"
