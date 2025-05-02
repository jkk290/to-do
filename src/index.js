import "./styles.css";
import { createTodo } from "./todoFactory";
import { displayTodos } from "./displayTodos";
import { updateTitle } from "./updateTodoTitle";
import { getTodoID } from "./getTodoID";
import { markCompleted } from "./completeTodo";

createTodo('Take out trash', 'Empty all trash cans, and put can out on street', 'today 8pm', 'high', 'chores');

createTodo('Restart computer', 'Restart computer to apply updates', '5/2/2025 4pm', 'low');


displayTodos();

let thisId = getTodoID(0);

updateTitle('Do the trash',thisId);
markCompleted(thisId);

displayTodos();

