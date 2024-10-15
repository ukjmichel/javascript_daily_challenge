// Challenge: Title Case a Sentence
// Task: Write a function titleCase(str) that takes a string as input
// and returns the string with the first letter of each word capitalized,
// and the rest of the word in lowercase.

// Instructions:

// Ignore any non-letter characters (assume the input is a valid sentence).
// Make sure all the words in the string are separated by spaces.

// Example:

// titleCase("i'm a little tea pot");
// // Output: "I'm A Little Tea Pot"

const titleCase = (s) => {
  let words = s.split(' ');
  let capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );

  return capitalizedWords;
};

console.log(titleCase("i'm a little tea pot"));
