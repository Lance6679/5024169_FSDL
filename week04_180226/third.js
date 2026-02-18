// Create a custom event
const eventEmitter = require('events');
const emitter = new eventEmitter();

// Class Definition
class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    getGrade() {
        if (this.marks >= 90) {
            return "A Grade";
        } else if (this.marks >= 75) {
            return "B Grade";
        } else if (this.marks >= 50) {
            return "C Grade";
        } else {
            return "Fail";
        }
    }

    displayResult() {
        console.log(`${this.name} scored ${this.marks} and got ${this.getGrade()}`);
    }
}

// Create Object
const student1 = new Student("John", 99);

// Event Listener
emitter.on("showResult", function() {
    student1.displayResult();
});

// Trigger Event
emitter.emit("showResult");