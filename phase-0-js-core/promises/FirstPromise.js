/**
 * A promise can either be:
 *  - fulfilled
 *  - rejected
 *  - pending
 */

const cookiePromise = new Promise((resolve, reject) => {
    // Mom's thought...
    // resolve -> give you the cookie
    // reject -> say no and not give you the cookie

    setTimeout(() => {
        resolve("Cookie");
    }, 2000); // Mom's conclusion: In 2 seconds, I promise I’ll give you a cookie.
});

const promise = new Promise((resolve, reject) => {
    resolve("Call me back please!"); // this could be later or immediate
}); // I issue a greeting promise

// when they are done with the work or whichever task they can reach back to you
promise.then(
    result => {
        console.log(result);
    }
);

// JS is single threaded so it can only do a single task at a time

console.log("Start");

Promise.resolve().then(() => console.log("Promise!"));

console.log("End");