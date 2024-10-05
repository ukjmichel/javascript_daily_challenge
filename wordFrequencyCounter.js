// Challenge: Word Frequency Counter
// Create a JavaScript function that takes a string of text
// as input and returns the most frequent word(s) and how many times it appears.
// If multiple words appear with the same frequency, return them all in an array.

// Instructions:
// Ignore case (e.g., "Word" and "word" should be counted as the same word).
// Ignore punctuation marks like commas, periods, etc.
// Return the words in alphabetical order if there's a tie in frequency.
// Example:
// javascript
// Copier le code
// const text = "This is a test. This test is only a test.";

// mostFrequentWords(text);
// // Output: ["test", "this"] (both words appear 3 times)
// Requirements:
// Handle case insensitivity:
// The comparison should treat uppercase and lowercase letters as the same.
// Ignore punctuation: Make sure punctuation doesn't affect the counting.
// Count words: Count the frequency of each word.
// Return the most frequent word(s): If multiple words have the same frequency,
// return them in an array, sorted alphabetically.

const text = 'This is a test. This test is only a test.';

const wordFrequencyCounter = (text) => {
  const words = text
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
    .split(' ');
  const frequency = {};
  words.forEach((word) => {
    if (word in frequency) {
      frequency[word]++;
    } else {
      frequency[word] = 1;
    }
  });
  const maxFrequency = Math.max(...Object.values(frequency));
  const mostFrequentWords = Object.keys(frequency)
    .filter((word) => frequency[word] === maxFrequency)
    .sort();
  return mostFrequentWords;
};
// Test the function
console.log(wordFrequencyCounter(text)); 

