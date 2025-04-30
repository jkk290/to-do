import { Todo } from "./todo";

export class ChecklistTodo extends Todo {
    constructor(id, title, description, duedate, priority, checklist) {

        super(id, title, description, duedate,priority);
        this.checklist = checklist;
    }
};