export class Todo {    
    constructor(id, title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = id;
    }

    info() {
        console.log(`ID: ${this.id}
            Title: ${this.title}
            Description: ${this.description}
            Due Date: ${this.dueDate}
            Priority: ${this.priority} `)

    }

};