/**
 * Think of promises like something you look forward to fullfiling in future; You could settle or not settle it.
 */

// life without promises (synchronous world)
const gift = "cake";
console.log("Here are the", gift, "gifts I brought y'all");

/**
 * computer runs line by line
 * gift exists immediately
 * no waiting
 * everyone is happy
 */

// plot twist: waiting is real
function getCookieFromMom() {
    return "Cookie";
}
const cookie = getCookieFromMom(); // takes 2 seconds: JavaScript says, “I’m not waiting. I have other stuff to do.”
console.log(cookie);