function greet() {
    console.log("Hello");
}

// functions are just first-class values in JS hence can be assigned to variables

let sayHello = greet;
sayHello();

// functions can be passed around
function callMoreTimes(fn) {
    fn()
    fn()
    fn()
    fn()
    fn()
}

callMoreTimes(greet); // Functions can be passed as arguments, just like numbers or objects

// functions can be returned
function makeGreeter(name) {
    return () => console.log(`Hello, ${name}`);
}

/**
 * Functions can create other functions which lay the foundations of callbacks, promises, and async
 */

const greetKen = makeGreeter("Ken");
greetKen();

// Anonymous functions: functions with no names
setTimeout(function(){console.log(`This message will be delayed...`)}, 1000); 

// Arrow functions: shorter sysntax for functions
const greetBobby = () => console.log("Hello, Bobby!");  // const greetBobby = () => {console.log("Hello, Bobby!")};
greetBobby();


const multiply = (a, b) => a * b;

const doOperation = (x, y, op) => op(x, y);

const result = doOperation(3, 4, multiply);

console.log(result);