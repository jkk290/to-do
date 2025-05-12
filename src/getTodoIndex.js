import myTodos from "./myTodos";

export function getTodoIndex(id) {
    const index = myTodos.findIndex((i) => {
        return i.id === id;
    });

    return index;

};