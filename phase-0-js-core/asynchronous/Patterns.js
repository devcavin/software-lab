/**
 * Promise.all -> Waits for all to resolve, fails fast if any reject: Promise.all([p1, p2])
 * Promise.allSettled -> Waits for all to settle, never rejects: Returns {status, value/reason}
 * Promise.race -> Resolves/rejects as soon as first settles: Useful for timeouts
 * Promise.any -> Resolves with first fulfilled, rejects if all reject
 */

const tasks = [
  Promise.resolve("A"),
  Promise.reject("B"),
  Promise.resolve("C"),
];

const results = await Promise.allSettled(tasks);
console.log(results);

function withTimeout(promise, ms) {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Timeout")), ms)
  );
  return Promise.race([promise, timeout]);
}

// Usage
await withTimeout(fakeFetch(1), 500); // will reject after 0.5s if fakeFetch > 0.5s


function cancellableFetch(id) {
  let cancelled = false;
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      if (cancelled) return rej("Cancelled");
      res(`data ${id}`);
    }, 1000);
  });
  return {
    promise,
    cancel: () => (cancelled = true)
  };
}

// Usage
const { promise, cancel } = cancellableFetch(1);
setTimeout(cancel, 500); // cancel after 0.5s
await promise.catch(console.log); // "Cancelled"