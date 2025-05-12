import { Todo } from "./todo";
import { ChecklistTodo } from "./checklistTodo";
import { NoteTodo } from "./noteTodo";
import myTodos from "./myTodos";
import { formatDate } from "./dateUtils.js";

export function createTodo(title, description, dueDate, priority, category = 'uncategorized', note, checklist) {
    let id = crypto.randomUUID();
    let completed = false;

    let formattedDate = formatDate(dueDate);

    if ((checklist == undefined) && (note == undefined)) {

        let todo = new Todo(id, title, description, formattedDate , priority, completed, category);
        myTodos.push(todo);
        console.log(`Todo created! ${todo}`);

    } else if (checklist != undefined) {

        let checklistTodo = new ChecklistTodo(id, title, description, formattedDate , priority, completed, category, checklist);
        myTodos.push(checklistTodo);

    } else if (note != undefined) {
        let noteTodo = new NoteTodo(id, title, description, formattedDate , priority, completed, category, note);
        myTodos.push(noteTodo);
    };



};