import { Todo } from "./todo";
import { CheckListTodo } from "./checklistTodo";
import { NoteTodo } from "./noteTodo";
import myTodos from "./myTodos"

export function createTodo(title, description, dueDate, priority, status, category) {
    let id = crypto.randomUUID();
    let todo = new Todo(id, title, description, dueDate, priority, status, category);

    myTodos.push(todo);

};