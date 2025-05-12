import myTodos from "../myTodos";
import { deleteTodo } from "../deleteTodo";
import { editTodoForm } from "./editTodoForm";

export function renderTodos() {

    const body = document.querySelector('body');
    const todoContainer = document.createElement('div');
    todoContainer.id = 'todo-container';

    const existingTodoContainer = document.getElementById('todo-container');

    if (existingTodoContainer) {
        existingTodoContainer.remove();
    }

    console.log(`rendering todos...${myTodos}`);

    myTodos.forEach(todo => {
        const todoDiv = document.createElement('div');
        todoDiv.setAttribute('class', 'todo-div');
        todoDiv.setAttribute('data-todo-id', todo.id);
        const todoTitle = document.createElement('h3');
        todoTitle.textContent = `${todo.title}`;
        const todoDescription = document.createElement('p');
        todoDescription.textContent =  `${todo.description}`;
        const todoDueDate = document.createElement('p');
        todoDueDate.textContent =  `Due by: ${todo.dueDate}`;
        const todoPriority = document.createElement('p');
        todoPriority.textContent =  `Priority: ${todo.priority}`;
        const todoCategory = document.createElement('p');
        todoCategory.textContent =  `Category: ${todo.category}`;

        todoDiv.appendChild(todoTitle);
        todoDiv.appendChild(todoDescription);
        todoDiv.appendChild(todoDueDate);
        todoDiv.appendChild(todoPriority);
        todoDiv.appendChild(todoCategory);


        let todoId = todo.id;

        const editTodoButton = document.createElement('button');
        editTodoButton.textContent = 'Edit';
        editTodoButton.addEventListener('click', () =>{
            editTodoForm(todoId);
        });

        const deleteTodoButton = document.createElement('button');
        deleteTodoButton.textContent = 'Delete';
        deleteTodoButton.addEventListener('click', () => {
            let removeDiv = deleteTodoButton.closest(`[data-todo-id="${todoId}"]`)

            if (removeDiv){
                removeDiv.remove();
            }

            deleteTodo(todoId);
        });

        todoDiv.appendChild(editTodoButton);
        todoDiv.appendChild(deleteTodoButton);
        todoContainer.appendChild(todoDiv);
    });


    body.appendChild(todoContainer)
};