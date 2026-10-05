let animals = ["cat", "dog", "hamster", "parrot"]


let length = animals.length;

let random_index = Math.floor(Math.random() * length);  
let random_animal = animals[random_index];
console.log("Random animal:", random_animal);
