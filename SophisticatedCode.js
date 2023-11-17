// Code Filename: SophisticatedCode.js

/**************************************************
 * Sophisticated Code Example
 * 
 * This code demonstrates an advanced example of a
 * web application that calculates the Fibonacci
 * sequence up to a given number. It includes error
 * handling, input validation, and a user-friendly
 * interface.
 **************************************************/

// Function to calculate the Fibonacci sequence
function fibonacciSequence(number) {
  if (number === 0) {
    return [];
  } else if (number === 1) {
    return [0];
  } else if (number === 2) {
    return [0, 1];
  }

  let sequence = [0, 1];

  for (let i = 2; i < number; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
}

// Function to print the Fibonacci sequence
function printSequence(sequence) {
  console.log("Fibonacci Sequence:");

  for (let i = 0; i < sequence.length; i++) {
    console.log(sequence[i]);
  }
}

// Function to validate user input
function validateInput(input) {
  if (!input) {
    return false;
  }

  const number = parseInt(input);

  if (isNaN(number) || number < 0) {
    return false;
  }

  return true;
}

// Prompt user for input
const userInput = prompt("Enter a number to generate the Fibonacci sequence:");

// Validate user input
if (validateInput(userInput)) {
  const number = parseInt(userInput);

  // Calculate Fibonacci sequence
  const sequence = fibonacciSequence(number);

  // Print sequence
  printSequence(sequence);
} else {
  console.log("Invalid input. Please provide a non-negative number.");
}