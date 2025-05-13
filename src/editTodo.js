import myTodos from "./myTodos";
import { getTodoIndex } from "./getTodoIndex";

export function editTodo(newTitle, newDescription, newDueDate, newPriority, newCategory, newNote, newChecklist, id) {
    
    let index = getTodoIndex(id);

    myTodos[index].title = newTitle;
    myTodos[index].description = newDescription;
    myTodos[index].dueDate = newDueDate;
    myTodos[index].priority = newPriority;
    myTodos[index].category = newCategory;
    myTodos[index].note = newNote;
    myTodos[index].checklist = newChecklist;

};