// Task: Write a JavaScript function findLongestWord that takes a string as input
// and returns the longest word in the string. If there are multiple words with the same length,
// return the first one.

// Example:

// javascript
// Copier le code
// findLongestWord("The quick brown fox jumped over the lazy dog");
// // Output: "jumped"
// Instructions:

// You need to split the input string into words.
// Find the longest word based on the number of characters.
// If two or more words have the same length, return the first one encountered.
// Hint:

// You can use split(' ') to convert the string into an array of words.
// Use a loop or array methods like reduce to find the longest word.

const findWord = (s) => {
  // Split the string into words
  let words = s.split(' ').filter((word) => word.length > 0);

  // Use reduce to remove non-alphanumeric characters from each word
  words = words.map((word) =>
    word.split('').reduce((acc, char) => {
      if (/[a-zA-Z0-9]/.test(char)) {
        return acc + char; // Keep alphanumeric characters only
      }
      return acc; // Skip non-alphanumeric characters
    }, '')
  );

  // Filter out any empty strings after removing symbols
  words = words.filter((word) => word.length > 0);

  // Count the number of words
  const numberOfWords = words.length;

  // Find the longest word
  let longestWord = words.reduce(
    (a, b) => (a.length > b.length ? a : b),
    words[0]
  );

  // Find the shortest word
  let shortestWord = words.reduce(
    (a, b) => (a.length < b.length ? a : b),
    words[0]
  );

  // Count the frequency of each character (ignoring spaces and symbols)
  let charFrequency = s.split('').reduce((acc, char) => {
    if (/[a-zA-Z0-9]/.test(char)) {
      char = char.toLowerCase(); // Make it case-insensitive
      acc[char] = (acc[char] || 0) + 1; // Count the character
    }
    return acc;
  }, {});

  // Find the most frequent and least frequent character
  let mostCharacter = '';
  let lessCharacter = '';
  let maxCount = 0;
  let minCount = Infinity;

  for (let char in charFrequency) {
    if (charFrequency[char] > maxCount) {
      maxCount = charFrequency[char];
      mostCharacter = char;
    }
    if (charFrequency[char] < minCount) {
      minCount = charFrequency[char];
      lessCharacter = char;
    }
  }
  return {
    longestWord,
    shortestWord,
    numberOfWords,
    mostCharacter,
    lessCharacter,
  };
};

// Test the function
const dummyText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';
console.log(findWord(dummyText));
