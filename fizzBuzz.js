// Challenge: FizzBuzz

// Write a function fizzBuzz that takes an integer n as an argument
// and prints the numbers from 1 to n.
// However, for multiples of 3, print "Fizz" instead of the number,
// for multiples of 5, print "Buzz" instead of the number,
// and for multiples of both 3 and 5, print "FizzBuzz".

// Instructions:

// Create a function fizzBuzz(n).
// Use a loop to iterate through the numbers from 1 to n.
// Check the conditions to print "Fizz," "Buzz," or "FizzBuzz."

const fizzBuzz = (n) => {
  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
};

fizzBuzz(30);
