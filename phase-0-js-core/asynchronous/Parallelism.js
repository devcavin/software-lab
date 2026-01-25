// consider these asynchronous functions

async function fetchUser() {
    return "User";
}

async function fetchPosts() {
    return ["Post 1", "Post 2"];
}

// each one here takes a single second to process hen total time taken is 2: therefore slow

/* async function main() {
    const user = await fetchUser();
    const posts = await fetchPosts();

    console.log(user, posts);
} */ // this is slow because the second call waits for first to finish


// ultimate fix: Use parallel method
/* async function main() {
    const userPromise = fetchUser();
    const postPromise = fetchPosts();

    const user = await userPromise;
    const posts = await postPromise;

    console.log(user, posts);
} */ // both are exercuted seperately in parallel hence faster

// cleaner approach
async function main() {
  const [user, posts] = await Promise.all([
    fetchUser(),
    fetchPosts()
  ]);

  /* const results = await Promise.allSettled([
  fetchUser(),
  fetchPosts(),
  fetchComments()
  ]); */ // safer parallel

  console.log(user, posts);
}

main()