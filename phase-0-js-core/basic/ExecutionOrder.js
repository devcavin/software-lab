// JavaScript Executes Top → Bottom
console.log("A");
console.log("B");
console.log("C");

// Variables Are Created When the Line Runs
console.log(x);
let x = 5; // Code does not exist until execution reaches it

// statements vs expressions
let a = 2; // this is a statement: it performs an action

a + 8; // this is an expression: it produces a value

// exercutions in JS stops at errors
console.log("Before");
doesNotExist(); // this function doesn't exist: Error will be thrown here ending the execution at this point
console.log("After");