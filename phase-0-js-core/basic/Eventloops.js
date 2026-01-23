/**
 * JavaScript does NOT pause the call stack instead it only runs something when the stack is empty
 */

console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

console.log("End");

/**
 * setTimeout(fn, 0) does NOT mean “run now”. It means: “Run after the stack is empty and at least 0ms have passed.”
 * It registers callback as the execution continues
 * 
 * Think of JS as:
 *    - Stack → “What is running now?”
 *    - Timer → “Who wants to run later?”
 *    - Event Loop → “Is the stack empty yet?”
 */


// mind plot
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

setTimeout(() => {
  console.log("C");
}, 0);

console.log("D");


// I am out
console.log("I will be back after the timeout")
setTimeout(() => alert("I am back"), 6300000); // 
