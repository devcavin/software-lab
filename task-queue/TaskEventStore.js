class TaskEventStore {
    constructor() {
        this.events = [];
    }

    append(event) {
        this.events.push(event);
    }

    getAll() {
        return [...this.events];
    }
}