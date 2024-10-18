// Check for Balanced Parentheses challenge:
// the goal is to write a function that determines whether the parentheses in a given string are balanced.
// A string has balanced parentheses if:

// Every opening parenthesis ( has a corresponding closing parenthesis ).
// Parentheses are properly nested.
// For example:

// "()()" is balanced.
// "(())" is balanced.
// "(()" is not balanced.
// ")(" is not balanced.
// Plan:
// Traverse the string.
// Use a counter to track the balance of parentheses:
// Increase the counter for each opening parenthesis (.
// Decrease the counter for each closing parenthesis ).
// If the counter ever goes negative (more ) than ( at any point), the string is not balanced.
// At the end of the string, if the counter is not zero, the string is also not balanced.

const isBalenced = (s) => {
  let parr = s.match(/[()]/g);
  let balence = 0;

  for (i = 0; i < s.length; i++) {
    if (parr[i] === '(') {
      balence++;
    } else if (parr === ')') {
      balence--;
    }
    //if wrong order of parenthese 
    if (balence < 0 > -1) {
      return false;
    }
  }

  return balence === 0 ? true : false;
};

console.log(isBalenced('()'));
console.log(isBalenced('(())'));
console.log(isBalenced('())('));
console.log(isBalenced('()()'));
