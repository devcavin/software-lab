const repository = null; // plugging later
const eventStore = new TaskEventStore();
const store = new TaskStore(repository, eventStore);
const service = new TaskService(store);
const args = process.argv.slice(2);

const [command, ...rest] = args;

try {
  switch (command) {
    case "create":
      service.createTask(rest[0], rest[1]);
      console.log("Task created");
      break;

    case "start":
      service.startTask(rest[0]);
      console.log("Task started");
      break;

    case "complete":
      service.completeTask(rest[0]);
      console.log("Task completed");
      break;

    case "list":
      console.table(service.listTasks());
      break;

    default:
      console.log("Unknown command");
  }
} catch (err) {
  console.error("Error:", err.message);
}