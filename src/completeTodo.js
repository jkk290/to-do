import myTodos from "./myTodos";

export function markCompleted(id) {
    const index = myTodos.findIndex((i) => {
        return i.id === id;
    });

    myTodos[index].completeTodo();
}