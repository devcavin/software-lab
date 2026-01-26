import fs from "fs/promises";

class JsonTaskRepo extends TaskRepository {
    constructor(filename) {
        super();
        this.filename = filename;
    }

    async save(tasks) {
        await fs.writeFile(this.filename, JSON.stringify(tasks, null, 2));
    }

    async load() {
        try {
            const data = await fs.readFile(this.filename, "utf-8");
            const dataObjects = JSON.parse(data);
            return dataObjects.map(t => new Task(t.id, t.title, t.description, t.status));
        } catch {
            return [];
        }
    }
}