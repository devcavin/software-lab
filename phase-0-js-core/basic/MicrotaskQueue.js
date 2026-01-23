/**
 * Microtask queues(Promises, process.nextTick, queueMicrotask, MutationObserver, aync/await...) are the the queue types that execute immediately before the Macrotask queues(setTimeout, setImmediate, setInterval, event listener...) 
 * 
 * Why does Promise.then run before setTimeout?; Because Promise callbacks are queued in the microtask queue, which is drained completely before the macrotask queue.
 */

// example in a code
console.log("Start");

// microtask queue
Promise.resolve().then(() => {
    console.log("Promise micro");
});

// macrotask queue
setTimeout(() => {
    console.log("Timeout");
}, 1);

console.log("End");


console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve()
  .then(() => {
    console.log("3");
    Promise.resolve()
      .then(() => console.log("4"));
  })
  .then(() => console.log("5"));

Promise.resolve()
  .then(() => console.log("6"));

console.log("7");

// Output: 1, 7, 3, 6, 4, 5, 2

// Starvation risk
// DANGER: Microtasks creating more microtasks can block macrotasks forever!
function createMicrotasks() {
  Promise.resolve().then(() => {
    console.log("Microtask");
    createMicrotasks();  // Infinite microtasks!
  });
}

createMicrotasks();
setTimeout(() => console.log("Never runs!"), 1000);
// The setTimeout never executes!


// process.nextTick() vs setImmediate() in Node.js
console.log("Start");

setImmediate(() => console.log("setImmediate"));  // Macrotask
process.nextTick(() => console.log("nextTick"));  // Microtask (highest priority)

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

// Output in Node.js:
// Start
// End
// nextTick    ← Highest priority microtask
// Promise     ← Regular microtask
// setImmediate ← Macrotask


/**
 * Key Takeaways:

    Microtasks execute BEFORE macrotasks in the event loop

    All microtasks are processed before any macrotask

    Promises use microtasks, setTimeout uses macrotasks

    Node.js has process.nextTick() which has even higher priority than Promises

    Don't create infinite microtasks - you'll block the event loop
    
    Simple mental model:

    Microtasks = "Do this right now after current task finishes"

    Macrotasks = "Do this later when there's time"
    
    This is why Promise callbacks seem to execute "immediately" while setTimeout(0) seems to have a delay!
 */