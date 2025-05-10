import myTodos from "./myTodos";
import * as storageUtils from "./storageUtils";

export function deleteTodo(id) {
    const index = myTodos.findIndex((i) => {
        return i.id === id;
    });

    myTodos.splice(index, 1);
    storageUtils.saveMyTodos(myTodos);

};