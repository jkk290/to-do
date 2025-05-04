import { Todo } from "./todo";
import { CheckListTodo } from "./checklistTodo";
import { NoteTodo } from "./noteTodo";
import myTodos from "./myTodos";
import { formatDate } from "./dateUtils.js";

export function createTodo(title, description, dueDate, priority, category) {
    let id = crypto.randomUUID();
    let completed = false;
    
    if (category == undefined) {
        category = 'uncategorized';
    }

    let formattedDate = formatDate(dueDate);

    let todo = new Todo(id, title, description, formattedDate , priority, completed, category);

    myTodos.push(todo);

};