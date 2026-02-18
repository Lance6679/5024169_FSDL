// Function to calculate grade
function calculateGrade(marks) {
    if (marks >= 90) {
        return "A Grade";
    } else if (marks >= 75) {
        return "B Grade";
    } else if (marks >= 40) {
        return "C Grade";
    } else {
        return "Fail";
    }
}

// Function to check even or odd
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Main Program
let marksArray = [85, 92, 78, 76, 63];

// Loop through marks using for loop
for (let i = 0; i < marksArray.length; i++) {
    let grade = calculateGrade(marksArray[i]);
    console.log("Marks:", marksArray[i], "- Grade:", grade);
}

console.log("------");

// While loop example
let num = 1;
while (num <= 5) {
    console.log("Number:", num, "-", checkEvenOdd(num));
    num++;
}