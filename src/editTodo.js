import myTodos from "./myTodos";

export function editTodo(newTitle, newDescription, newDueDate, newPriority, newCategory, id) {
    const index = myTodos.findIndex((i) => {
        return i.id === id;
    });

    myTodos[index].title = newTitle;
    myTodos[index].description = newDescription;
    myTodos[index].dueDate = newDueDate;
    myTodos[index].priority = newPriority;
    myTodos[index].category = newCategory;

};