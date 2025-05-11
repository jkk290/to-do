import * as storageUtils from "./storageUtils"

const myTodos = (function() {

    let array = storageUtils.loadMyTodos();

    return array;

})();

export default myTodos;