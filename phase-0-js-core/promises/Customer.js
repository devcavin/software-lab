console.log("Customer sits down!");

const order = new Promise((resolve, reject) => {
    resolve("drink");
});

order.then(drink => console.log(`Received a ${drink}`));

console.log("Customer talks to a friend");