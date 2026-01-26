class InvalidTaskTransitionStateError extends Error {
    constructor(from, to) {
        super(`Cannot transition task from ${from} to ${to}`);
    }
}

class TaskNotFoundError extends Error {
  constructor(id) {
    super(`Task with id ${id} not found`);
  }
}
