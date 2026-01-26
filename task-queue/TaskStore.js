class TaskStore {
    constructor() {
        this.tasks = [];
        this.repository = repository;
        this.eventStore = eventStore;
    }

    addTask(task) {
        this.tasks.push(task);
    };

    startTask(id) {
        const task = this.findTask(id);
        const event = task.start();
        this.eventStore.append(event);
    }


    completeTask(taskId) {
        const task = this.tasks.find(t => t.id === taskId);
        const event = task.complete();
        this.eventStore.append(event);
    }

    findTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (!task) throw new TaskNotFoundError(id);
        return task;
    }


    getAllTasks() {
        return [...this.tasks];
    };

    /* archiveCompletedTask() {
        for(const task of this.tasks) {
            if(task.status == "DONE") {
                task.archive();
            }
        }
    }; 
    removeCompletedTasks() {
        this.tasks = this.tasks.filter(t => t.status !== "DONE");
    }*/

    async save() {
        await this.repository.save(this.tasks);
    }

    async load() {
        const tasks = await this.repository.load();
        this.tasks = tasks;
    }
}