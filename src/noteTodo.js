import { Todo } from "./todo";

export class NoteTodo extends Todo {
    constructor(id, title, description, dueDate, priority, status, category, note) {

        super(id, title, description, dueDate, priority, status, category);
        this.note = note;
    }

};