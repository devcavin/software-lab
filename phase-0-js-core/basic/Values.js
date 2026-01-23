/**
 * Prinitives in JS
 * - number, string, boolean, null, undefined, bigint, symbol

 * Notes:
 * - Primitives are copied by value in JS.
 * - Primitives: compare VALUES
 */

let x = 10;
let y = x; // only get a COPY dude!

console.log(y);

y = 20;

console.log(x); // Unchnaged!
console.log(y); // changing y doesn't affect x

/**
 * Objects tend to behave differently since they are copied by reference
 * 
 * Note:
 *  - Objects: compare REFERENCES
 */

let obj1 = { status: "CREATED" };
let obj2 = obj1; // obj2 gets the REFERENCE to the same object

obj2.status = "IN_PROGRESS"; // "IN_PROGRASS" (obj1 is affected!)

// obj1 and obj2 point to the same memory so changing one changes the other too

console.log(obj1.status);
console.log(obj2.status);


/**
 * Mutation
 * In Node.js a shared object maybe used across multiple async operations, you mutate it in one callback, other parts of code see unexpected changes which may results in bugs, that are very hard to trace
 * frameworks and libraries often encourage immutable patterns in JS/TS as a solution to this problem
 */

let person = {name: "Alice"};
let anotherPerson = {...person}; // shallow copy of the person with shread operator
anotherPerson.name = "Bob";

console.log(person); // Alice
console.log(anotherPerson); // Bob

let taskA = {name: "Build", status: "CREATED"};
let taskB = taskA;

taskB = {...taskB, status: "IN_PROGRESS"};

console.log(taskA.status);
console.log(taskB.status);