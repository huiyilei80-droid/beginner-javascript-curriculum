// Problem 1
// Write a function that returns the number 42 and print the result.
function num = 42
   let same_num = 42
   return num
console.log (same_num)

// Problem 2
// Write a function that takes two numbers and returns their sum.
function getSum() {
   let sum = 35 + 82;
   console.log(sum);
   return sum;
}

getSum();

// Problem 3
// Create a global counter starting at 0.
// Write a function that increases it by 1 and prints it.
let global_counter = 0; 

function countUp() {
    global_counter = global_counter + 1;
    console.log(global_counter);
}

countUp(); 

// Problem 4
// Use a while loop to print the word "JavaScript" 4 times.
let i = 1; 

while (i < 5) {
  console.log("JavaScript");
  i++;
}



// Problem 5
// Create a list of your three favorite animals.
// Use a while loop to print each animal with the text "is awesome!" after it.
const My_Top_3_Favorite_Animals = ["Orcas", "Dragons", "Chickens"]
let i = 0;

while (i < animals.length) {
  console.log(animals[i] + " are awesome!");
  i++;
}

