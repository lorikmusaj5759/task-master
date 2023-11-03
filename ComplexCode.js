/* 
   Filename: ComplexCode.js
   Purpose: Example of a complex JavaScript code with multiple functionalities
*/

// Class representing a Person
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Function to calculate the sum of n numbers
function calculateSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Array of names
const names = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Create Person objects from names
const people = names.map((name) => new Person(name, Math.floor(Math.random() * 50) + 18, Math.random() > 0.5 ? "Male" : "Female"));

// Call introduce method for each person
people.forEach((person) => person.introduce());

// Calculate sum of numbers from 1 to 100
const sum = calculateSum(100);
console.log(`Sum of numbers from 1 to 100: ${sum}`);

// Check if a number is prime
const number = 37;
console.log(`${number} is${isPrime(number) ? "" : " not"} a prime number.`);

// Complex algorithm
function complexAlgorithm() {
  let result = 0;
  for (let i = 1; i <= 1000; i++) {
    result += Math.pow(i, 3);
    if (i % 7 === 0) {
      result -= Math.pow(i, 2);
    } else {
      result += 2 * i;
    }
  }
  return result;
}

console.log(`Complex Algorithm Result: ${complexAlgorithm()}`);

// Fibonacci sequence
function fibonacci(n) {
  const fibSequence = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
  }
  return fibSequence;
}

console.log(`Fibonacci sequence up to 10 terms: ${fibonacci(10)}`);

// Random number generator
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomNumber = getRandomNumber(1, 100);
console.log(`Random number between 1 and 100: ${randomNumber}`);

// More code and functionalities...

// ...

// Last line to execute in the code
console.log("Execution complete!");