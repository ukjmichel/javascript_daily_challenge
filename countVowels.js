// Count Vowels Challenge
// Problem Statement:
// Write a JavaScript function called countVowels that takes a string as input
// and counts the number of vowels in the string.
// Vowels are the characters: 'a', 'e', 'i', 'o', 'u'
// (both lowercase and uppercase).
// Ignore any non-vowel characters such as spaces, numbers, and punctuation.

// Requirements:
// The function should be case-insensitive (it should count both 'A' and 'a').
// It should return an integer representing the number of vowels found in the input string.
// Function Signature:
// javascript
// Copier le code
// function countVowels(str) {
//   // Your code here
// }
// Example Input/Output:
// Example 1:

// Input: "Hello World"
// Output: 3
// Explanation: The vowels in the string are 'e', 'o', 'o'.
// Example 2:

// Input: "JavaScript"
// Output: 3
// Explanation: The vowels are 'a', 'a', 'i'.
// Example 3:

// Input: "Why?"
// Output: 0
// Explanation: There are no vowels in the string.
// Example 4:

// Input: "AEIOU"
// Output: 5
// Explanation: The string contains all the vowels.
// Constraints:
// The input string will consist of printable ASCII characters
// (including spaces, punctuation, etc.).
// The input length will not exceed 1000 characters.

const countVowels = (s) => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  let vowelsCount = { a: 0, e: 0, i: 0, o: 0, u: 0, y: 0 };
  let letters = s.split('');
  letters.forEach((letter) => {
    if (vowels.includes(letter)) {
      // Check if the letter is a vowel.
      vowelsCount[letter]++; // Increment the count if it's a vowel.
    }
  });
  const vowelsTotal = Object.values(vowelsCount).reduce(
    (acc, count) => acc + count,
    0
  );
  return { vowelsCount, vowelsTotal };
};

const countVowelsWithRegex = (s) => {
  // Convert the string to lowercase to handle both cases
  const lowercaseString = s.toLowerCase();

  // Match all vowels (including 'y') using regex
  const matches = lowercaseString.match(/[aeiouy]/g);

  // Initialize the vowelsCount object
  let vowelsCount = { a: 0, e: 0, i: 0, o: 0, u: 0, y: 0 };

  // If there are matches, count each vowel
  if (matches) {
    matches.forEach((letter) => {
      vowelsCount[letter]++; // Increment the count if it's a vowel
    });
  }

  // Calculate the total number of vowels
  const vowelsTotal = Object.values(vowelsCount).reduce(
    (acc, count) => acc + count,
    0
  );

  return { vowelsCount, vowelsTotal }; // Return both counts
};

console.log(
  countVowels('Lorem ipsum dolor sit amet, consectetur adipiscing elit')
);
console.log(
  countVowelsWithRegex(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  )
);
