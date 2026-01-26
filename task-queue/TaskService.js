class TaskService {
  constructor(taskStore) {
    this.taskStore = taskStore;
  }

  createTask(id, title, description) {
    const task = new Task(id, title, description);
    this.taskStore.addTask(task);
  }

  startTask(id) {
    this.taskStore.startTask(id);
  }

  completeTask(id) {
    this.taskStore.completeTask(id);
  }

  listTasks() {
    return this.taskStore.getAllTasks();
  }
}
