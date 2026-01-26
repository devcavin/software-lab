class TaskEvent {
    constructor(taskId, from, to, occuredAt = new Date()) {
        this.taskId = taskId;
        this.from = from;
        this.to = to;
        this.occuredAt = occuredAt;
    }
}