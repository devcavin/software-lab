/**
 * Promise is an object that represents a value that will be available later: It's like a promise to your fiance
 * 
 * It can be in one of three states:
 *  pending – still working
 *  fulfilled – succeeded (has a value)
 *  rejected – failed (has a reason/error)
 * 
 * Once a Promise is fulfilled or rejected, it is settled and can never change again
 */

/* const promise = new Promise((resolve, reject) => {
    try{
        resolve(42);
    } catch (e) {
        reject(new Error("Failed!"));
    }
});

promise.then(value => {
    console.log(value);
}); */

console.log("A");

Promise.resolve().then(() => console.log("B"));

console.log("C");