import myTodos from "./myTodos";

export function displayTodos() {
    myTodos.forEach(todo => todo.info());
};