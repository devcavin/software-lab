function fakeFetch(id) {
    return new Promise(res => {
        console.log(`start: ${id}`);

        setTimeout(() => {
            console.log(`end: ${id}`);
            res(`data: ${id}`);
        }, 1000);
    });
}

const tasks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(id => () => fakeFetch(id));

async function limitConcurrency(tasks, limit = 2) {
    const results = [];
    let i = 0;

    async function worker() {
        while(i < tasks.length) {
            const current = i++;
            results[current] = await tasks[current]();
        }
    }

    const workers = Array.from({length: limit}, () => worker());
    await Promise.all(workers);
    return results;
}


limitConcurrency(tasks, 2).then(results => console.log("All done:", results))