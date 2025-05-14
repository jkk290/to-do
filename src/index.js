import "./styles.css";
import myTodos from "./myTodos";
import { createAddButton } from "./frontend/addTodoButton.js";
import { renderTodos } from "./frontend/renderTodos.js";
import { selectTodoDisplay } from "./frontend/todoDisplaySelector.js";


selectTodoDisplay();
createAddButton();
renderTodos(myTodos);


