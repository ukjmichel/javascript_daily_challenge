// Challenge: Binary to Decimal Converter
// Write a function binaryToDecimal that takes a binary string as input
// and returns its decimal equivalent.

// Example
// javascript
// Copier le code
// binaryToDecimal("101"); // should return 5
// binaryToDecimal("1111"); // should return 15
// binaryToDecimal("10010"); // should return 18
// Solution Outline
// Use parseInt with a radix of 2 to convert the binary string directly to decimal.
// Return the decimal value.

const binaryToDecimal = (binaryString) => {
  const binaryArray = binaryString.split('');
  let decimal = 0;
  for (let i = 0; i < binaryArray.length; i++) {
    if (binaryArray[i] === '1') {
      decimal += Math.pow(2, i);
    }
  }

  console.log(decimal);
};

binaryToDecimal('101'); // should return 5
binaryToDecimal('1111'); // should return 15
binaryToDecimal('10010'); // should return 18

const decimalToBinary = (decimalNumber) => {
  let binaryString = ''; // Initialize binaryString to an empty string
  let rest = decimalNumber;

  while (rest !== 0) {
    binaryString = (rest % 2).toString() + binaryString; // Prepend to build the binary string
    rest = Math.floor(rest / 2); // Update rest by dividing by 2
  }

  // Handle the edge case where the decimalNumber is 0
  return binaryString || '0';
};

// Testing the function
console.log(decimalToBinary(5)); // Output: "101"
console.log(decimalToBinary(15)); // Output: "1111"
console.log(decimalToBinary(18)); // Output: "10010"
