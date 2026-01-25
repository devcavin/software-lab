async function a() {
  throw new Error("A failed");
}

async function b() {
  return 2;
}

/* async function main() {
  try {
    const [x, y] = await Promise.all([a(), b()]);
    console.log(x, y);
  } catch (e) {
    console.log("Caught:", e.message);
  }
} */

async function main() {
  const results = await Promise.allSettled([a(), b()]);

  results.forEach(r => {
    if (r.status === "fulfilled") {
      console.log("Value:", r.value);
    } else {
      console.log("Error:", r.reason.message);
    }
  });
}