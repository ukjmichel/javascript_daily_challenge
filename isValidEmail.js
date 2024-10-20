// Challenge: Validate an Email Address
// Objective: Write a function isValidEmail(email)
// that returns true if the email is valid, and false otherwise.

// Email Validation Criteria:

// The email must start with an alphanumeric character (a-z, A-Z, 0-9).
// It can contain letters, numbers, dots (.), underscores (_),
// percent signs (%), plus signs (+), and hyphens (-).
// pid must end with a letters or numbers
// The email must contain exactly one @ symbol.
// After the @, it should contain a domain name that includes letters,
// numbers, and hyphens (-), and it must end with a top-level domain (TLD)
// that is at least two characters long (e.g., .com, .org, .net).

const isValidEmail = (email) => {
  const regex = /^[a-zA-Z0-9][\w.-]*[a-zA-Z0-9]@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

console.log(isValidEmail('example@test.com')); // true
console.log(isValidEmail('user.@domain.com')); // false
console.log(isValidEmail('user.test@domain.com')); // true
console.log(isValidEmail('user-test@domain.com')); // true
console.log(isValidEmail('invalid-email@.com')); // false
console.log(isValidEmail('user@domain@com')); // false
console.log(isValidEmail('user@domain.com.')); // false
console.log(isValidEmail('user@domain..com')); // false
console.log(isValidEmail('user@-domain.com')); // false
console.log(isValidEmail('user@domain.com.com')); // false
console.log(isValidEmail('user@domain.com')); // true
