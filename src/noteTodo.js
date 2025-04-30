import { Todo } from "./todo";

export class NoteTodo extends Todo {
    constructor(id, title, description, duedate, priority, note) {

        super(id, title, description, duedate, priority);
        this.note = note;
    }

};