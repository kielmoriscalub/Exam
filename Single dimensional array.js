let numbers = [24, 65, 21, 5, 9, 32, 42, 80, 57];
let names = ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"];

let combined = numbers.concat(names);
console.log("Combined array:", combined);

numbers.sort((a, b) => b - a); // Descending numerical sort
console.log("Numbers (descending):", numbers);

names.sort(); // Alphabetical sort
console.log("Names (alphabetical):", names);