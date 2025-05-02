import { Todo } from "./todo";

export class NoteTodo extends Todo {
    constructor(id, title, description, dueDate, priority, completed, category, note) {

        super(id, title, description, dueDate, priority, completed, category);
        this.note = note;
    }

};