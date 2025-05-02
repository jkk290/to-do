import { Todo } from "./todo";

export class ChecklistTodo extends Todo {
    constructor(id, title, description, dueDate, priority, status, category, checklist) {

        super(id, title, description, dueDate, priority, status, category);
        this.checklist = checklist;
    }
};