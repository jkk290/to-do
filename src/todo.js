export class Todo {    
    constructor(id, title, description, dueDate, priority, status, category) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = id;
        this.status = status;
        this.category = category;
    }

    info() {
        console.log(
            `ID: ${this.id}
            Title: ${this.title}
            Description: ${this.description}
            Due Date: ${this.dueDate}
            Priority: ${this.priority}
            Status: ${this.status}
            Category: ${this.category}`)

    }

    TodoId() {
        return this.id
    }

};