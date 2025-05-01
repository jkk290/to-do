import myTodos from "./myTodos";

export function updateTitle(newTitle, id) {
    const index = myTodos.findIndex((i) => {
        return i.id === id;
    });

    myTodos[index].title = newTitle;

};