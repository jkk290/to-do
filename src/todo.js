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

};