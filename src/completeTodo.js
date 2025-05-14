import myTodos from "./myTodos";
import { saveMyTodos } from "./storageUtils";

export function markCompleted(id) {
    const index = myTodos.findIndex((i) => {
        return i.id === id;
    });

    myTodos[index].completed = true;
    saveMyTodos(myTodos);
}