export class Todo {    
    constructor(id, title, description, dueDate, priority, completed, category) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = id;
        this.completed = completed;
        this.category = category;
    }

    info() {
        console.log(
            `ID: ${this.id}
            Title: ${this.title}
            Description: ${this.description}
            Due Date: ${this.dueDate}
            Priority: ${this.priority}
            Completed: ${this.completed}
            Category: ${this.category}`)

    }

    TodoId() {
        return this.id
    }

    completeTodo() {
        return this.completed = true;
    }

};