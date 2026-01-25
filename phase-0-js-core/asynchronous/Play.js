async function getUser() {
  return { id: 1, name: "Cavin" };
}

async function main() {
  const user = await getUser();
  console.log(user.name);
}

main();