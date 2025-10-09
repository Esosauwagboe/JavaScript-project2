// A function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// console.log(reverseString("hello")); // Output: "olleh"


// A function that counts the number of characters in a string
function countCharacters(str) {
  return str.length;
}

// console.log(countCharacters("welcome")); // Output: 7


// A function that capitalize the first letter of each word in a sentence
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// console.log(capitalizeWords("welcome to javascript"));
// Output: "Welcome To Javascript"


// Function to find maximum amd minimum values in an array
function findMinMax(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return { min, max };
}

// let numbers = [5, 2, 9, 1, 7];
//let result = findMinMax(numbers);
// console.log("Minimum:", result.min); // Output: 1
// console.log("Maximum:", result.max); // Output: 9


// Function that calculates the sum of a elements in an array
function sumArray(arr) {
  return arr.reduce((total, num) => total + num, 0);
}

// let numbers = [5, 2, 9, 1, 7];
// console.log("Sum:", sumArray(numbers)); // Output:24 


//Function that filters out arrays
function filterArray(arr, condition) {
  return arr.filter(condition);
}

// keep numbers >= 5
// let numbers = [1, 4, 5, 8, 10];
// let result = filterArray(numbers, num => num >= 5);
// console.log(result); // Output: [5, 8, 10]


//Function that calculates the factorial of a given number
 function factorial(n) {
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// console.log(factorial(5)); // Output: 120


// Function to check if a number is a prime or not
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(isPrime(7));   // Output: true
console.log(isPrime(10));  // Output: false


// Function a generate a fibonacci sequence
function fibonacci(n) {
  let sequence = [];
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) {
    sequence.push(a);
    [a, b] = [b, a + b];
  }
  return sequence;
}

console.log(fibonacci(10));
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]











