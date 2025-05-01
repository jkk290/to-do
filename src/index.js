import "./styles.css";
import { createTodo } from "./todoFactory";
import { displayTodos } from "./displayTodos";
import { updateTitle } from "./updateTodoTitle";

createTodo('Take out trash', 'empty all trash cans, and put can out on street', 'today 8pm', 'high');

displayTodos();

