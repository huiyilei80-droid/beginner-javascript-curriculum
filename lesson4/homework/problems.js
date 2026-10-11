// Problem 1
// Create a list of 3 operating systems.
// Print the last one using length.
// Then reverse the list and print it.
let os = ["microsoft windows", "apple macOS", "linux"]
console.log (os[os.length - 1]); 
osReversed = os.toReversed(os)
console.log (osReversed)

// Problem 2
// Create a list of 4 school subjects.
// Print the second subject.
// Then sort them alphabetically and print the result.
let schoolSubjects = ["math", "computer science", "science", "english"]
console.log (schoolSubjects[1])

console.log (schoolSubjects.sort())

// Problem 3
// Create a list of 5 error codes.
// Print how many there are.
// Then find the index of "403" and print it.
// Problem 3
// Create a list of 5 error codes.
// Print how many there are.
// Then find the index of "403" and print it.
const errorCodes = ["200", "400", "401", "403", "500"];

console.log(errorCodes.length);

const index403 = errorCodes.indexOf("403");
console.log(index403);

// Problem 4
// Create a list of 2 programming languages.
// Print a random one.
// Then append another language and print the list.
const languages = ["JavaScript", "Python"];

const randomIndex = Math.floor(Math.random() * languages.length);
console.log(languages[randomIndex]);

languages.push("TypeScript");
console.log(languages);

// Problem 5
// Create a list of 6 passwords.
// Print the one in the middle using length.
// Then remove the first password in the list and print it.
let passwords = ["2653", "90oi", "7897", "ty84", "980t", "743j"]

console.log (passwords[passwords.length - 3]); 
passwords.shift()

console.log (passwords)












