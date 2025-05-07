import myTodos from "./myTodos";
import { info } from "./todoInfo";

export function displayTodos() {
    myTodos.forEach(todo => info(todo));
};