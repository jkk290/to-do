import { Todo } from "./todo";

export class ChecklistTodo extends Todo {
    constructor(id, title, description, dueDate, priority, completed, category, checklist) {

        super(id, title, description, dueDate, priority, completed, category);
        this.checklist = checklist;
    }
};