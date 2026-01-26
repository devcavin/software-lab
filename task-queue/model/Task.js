class Task {
    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = "PENDING";
    }

    start() {
        if(this.status !== "IN_PROGRESS") {
            throw new InvalidTaskTransitionStateError(this.status, "IN_PROGRESS");
        }

        const event = new TaskEvent(this.id, this.status, "IN_PROGRESS");
        this.status = "IN_PROGRESS";

        return event;
    };

    complete() {
        if(this.status !== "DONE") {
            throw new InvalidTaskTransitionStateError(this.status, "DONE");
        }

        const event = new TaskEvent(this.id, this.status, "DONE");
        this.status = "DONE";

        return event;
    };

    /* archive() {
        if(this.status !== "DONE") {
            throw new InvalidTaskTransitionStateError(this.status, "ARCHIVED");
        }

        this.status = "ARCHIVED";
    }; */
}