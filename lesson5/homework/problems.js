// Problem 1
// Count and print how many scores are 100.
const scores = ["100", "100", "99", "100"];
const target = '100';

const count = scores.filter(item => item === target).length;
console.log(count); 

// Problem 2
// Search for the color "blue" in the list and print its index if it's found.
const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Blue", "Purple", "Pink", "Magenta"];
const target2 = 'Blue';

const count2 = colors.filter(item => item === target2).length;
console.log(count2); 

// Problem 3
// Find and print the sum of all the numbers less than -10 in the list.
const numbers = [-5, -12, 0, -20, -8, -15];
const numbers2 = [0, 932, 438, 792, -3689];
const numbers3 = [23748, -328, 8743, 3349];
const numbers4 = [-382, -328, 289, 238, 5];
  
const allNumbers = [...numbers, ...numbers2, ...numbers3, ...numbers4];

const totalSum = allNumbers
  .filter(num => num < -10)
  .reduce((sum, current) => sum + current, 0);

console.log(totalSum); 


// Problem 4
// Find and print the biggest number less than 100 in the list.
const newNumbers1 = [3, 43, 3, 3, 723782, 402, 2802, 197129, 4789213];

const combined = newNumbers1;
const result = Math.max(...combined.filter(num => num < 100));

console.log(result);

// Problem 5
// Find and print the total sum of all the numbers in the list.
const newestNumbers = [43, 23, 235, 645, 234];

const newerTotalSum = newestNumbers.reduce((sum, current) => sum + current, 0);

console.log(NewerTotalSum);


















