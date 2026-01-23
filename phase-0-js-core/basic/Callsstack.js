/**
 * JavaScript runs code top → bottom, one frame at a time
 * There is one call stack. Only one thing runs at once.
 */

// 1st
console.log("Start");

// 2nd
function add(a, b) {
    return (a + b);
}

console.log(add(3, 4));

// 3rd
console.log("End");

// mind prep
console.log("A");

function first() {
  console.log("B");
  second();
}

function second() {
  console.log("C");
}

first();

console.log("D");
