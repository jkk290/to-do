import myTodos from "./myTodos";

export function deleteTodo(id) {
    const index = myTodos.findIndex((i) => {
        return i.id === id;
    });

    myTodos.splice(index, 1);

};