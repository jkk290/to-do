import * as storageUtils from "./storageUtils"

const myTodos = (function() {
    let todoArray = null;
    let arrayString = storageUtils.loadMyTodos();

    if (arrayString != null) {
        todoArray = arrayString;
    } else {
        todoArray = [];
    };

    return todoArray;

})();

export default myTodos;