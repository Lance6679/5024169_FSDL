// VARIABLES
let a = 10;
let b = 5;
let name = "John";

// ARITHMETIC OPERATORS
let addition = a + b;        // 15
let subtraction = a - b;     // 5
let multiplication = a * b;  // 50
let division = a / b;        // 2
let modulus = a % b;         // 0

console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);
console.log("Modulus:", modulus);

// ASSIGNMENT OPERATORS
a += 5;  // a = a + 5
console.log("New value of a:", a);

// COMPARISON OPERATORS
console.log("a > b:", a > b);
console.log("a < b:", a < b);
console.log("a == b:", a == b);
console.log("a === b:", a === b);
console.log("a != b:", a != b);

// LOGICAL OPERATORS
let x = true;
let y = false;

console.log("x AND y:", x && y);
console.log("x OR y:", x || y);
console.log("NOT x:", !x);

// COMBINED EXAMPLE
let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
    console.log(name + " is allowed to enter.");
} else {
    console.log(name + " is NOT allowed to enter.");
}
