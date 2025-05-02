import { Todo } from "./todo";
import { CheckListTodo } from "./checklistTodo";
import { NoteTodo } from "./noteTodo";
import myTodos from "./myTodos"

export function createTodo(title, description, dueDate, priority, category) {
    let id = crypto.randomUUID();
    let completed = false;
    if (category == undefined) {
        category = 'uncategorized';
    }
    let todo = new Todo(id, title, description, dueDate, priority, completed, category);

    myTodos.push(todo);

};