import "./styles.css";
import { createTodo } from "./todoFactory";
import myTodos from "./myTodos";

createTodo('Take out trash', 'empty all trash cans, and put can out on street', 'today 8pm', 'high');

myTodos[0].info();
