import "./styles.css";
import { createTodo } from "./todoFactory";
import { displayTodos } from "./displayTodos";
import { editTodo } from "./editTodo";
import { getTodoID } from "./getTodoID";
import { markCompleted } from "./completeTodo";
import { deleteTodo } from "./deleteTodo";
import myTodos from "./myTodos";
import { categorizedTodo } from "./categorizeTodos";
import * as storageUtils from "./storageUtils.js";

// createTodo('Take out trash', 'Empty all trash cans, and put can out on street', '05/07/25', 'high', 'chores', 'this a note');

// createTodo('My Checklist', 'This is a checklist', '05/07/25', 'high', 'chores', undefined , [1,2,3,4]);

// createTodo('Restart computer', 'Restart computer to apply updates', '05/02/2025', 'low', 'misc');

// createTodo('change lightbulb', 'Replace lightbulb in kitchen light', '05/06/2025', 'low', 'misc');

// createTodo('Water plants', 'water front and back yards', '05/02/2025', 'med', 'chores');

// createTodo('test delete', 'testing delete function', '2025/05/16', 'med');

// storageUtils.saveMyTodos(myTodos);

displayTodos();

// let thisId = getTodoID(0);

// editTodo('Buy milk','get milk next grocery shopping', 'today 4pm', 'high', 'shopping', thisId);
// markCompleted(thisId);

// thisId = getTodoID(5);
// deleteTodo(thisId)

// let categorizedArray = categorizedTodo(myTodos, 'misc');

// displayTodos(categorizedArray);

// storageUtils.saveMyTodos(myTodos);

