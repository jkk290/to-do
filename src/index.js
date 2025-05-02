import "./styles.css";
import { createTodo } from "./todoFactory";
import { displayTodos } from "./displayTodos";
import { editTodo } from "./editTodo";
import { getTodoID } from "./getTodoID";
import { markCompleted } from "./completeTodo";
import { deleteTodo } from "./deleteTodo";

createTodo('Take out trash', 'Empty all trash cans, and put can out on street', 'today 8pm', 'high', 'chores');

createTodo('Restart computer', 'Restart computer to apply updates', '5/2/2025 4pm', 'low', 'misc');

createTodo('Water plants', 'water front and back yards', '5/2/2025 4pm', 'med', 'chores');

createTodo('test delete', 'testing delete function', '5/2/2025 4pm', 'med');


displayTodos();

let thisId = getTodoID(0);

editTodo('Buy milk','get milk next grocery shopping', 'today 4pm', 'high', 'shopping', thisId);
markCompleted(thisId);

thisId = getTodoID(3);
deleteTodo(thisId)

displayTodos();

