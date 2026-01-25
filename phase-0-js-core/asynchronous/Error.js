/* async function load() {
    throw new Error("boom");
}

load().catch((err) => {console.log(`Error: ${err.message}`)}); */

async function load() {
    try {
        await something();
    } catch (error) {
        console.log(`${error.message} error was encountered`);
    };
}

load();