const foodPromise = new Promise((resolve, reject) => {
    resolve("Pizza");
});

foodPromise.then((food) => console.log(`I got: ${food}`));

const foodOrder = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Burger");
    }, 2000);
});

foodOrder.then((food) => {
    console.log(`Served: ${food}`)
})