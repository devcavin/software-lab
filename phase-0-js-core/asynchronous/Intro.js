// Every async function returns a Promise. Always.
// async is just a promise with fancy syntax

async function foo() {
    return 42;
};

async function example() {
    const value = await Promise.resolve(42);
    console.log(value);
}