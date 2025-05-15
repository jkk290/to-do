import { deleteTodo } from "../deleteTodo";
import { editTodoForm } from "./editTodoForm";
import { markCompleted } from "../completeTodo";
import { saveMyTodos } from "../storageUtils";

export function renderTodos(filteredTodos) {

    const body = document.querySelector('body');
    const todoContainer = document.createElement('div');
    todoContainer.id = 'todo-container';

    const existingTodoContainer = document.getElementById('todo-container');

    if (existingTodoContainer) {
        existingTodoContainer.remove();
    }

    console.log(`rendering todos...${filteredTodos}`);

    filteredTodos.forEach(todo => {
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
        if (todo.completed) {
            const todoCompleted = document.createElement('h4');
            todoCompleted.textContent = 'Completed!';
            todoDiv.appendChild(todoCompleted);
        }
        todoDiv.appendChild(todoDescription);
        todoDiv.appendChild(todoDueDate);
        todoDiv.appendChild(todoPriority);
        todoDiv.appendChild(todoCategory);

        if (todo.note != undefined) {            
            const todoNote = document.createElement('p');
            todoNote.textContent = `Notes: ${todo.note}`;
            todoDiv.appendChild(todoNote);
        } else if (todo.checklist != undefined) {                        
            const todoChecklist = document.createElement('ul');
            todo.checklist.forEach(function(item, index) {
                const listItem = document.createElement('li');
                const checklistItem = document.createElement('input');
                checklistItem.type = 'checkbox';
                checklistItem.name = 'checklist';
                checklistItem.setAttribute('data-index', index);

                checklistItem.checked = item.completed;                  
                    
                if (item.completed) {
                    listItem.classList.add('completed');    }

                listItem.appendChild(checklistItem);
                const checklistItemLabel = document.createElement('label');
                checklistItemLabel.textContent = item.value;
                listItem.appendChild(checklistItemLabel);
                listItem.appendChild(document.createElement('br'));
                todoChecklist.appendChild(listItem);
            });

            todoChecklist.currentTodo = todo;

            todoChecklist.addEventListener('change', (e) => {
                if (e.target.type === 'checkbox') {
                    const listItem = e.target.closest('li');

                    const itemIndex = parseInt(e.target.getAttribute('data-index'));
                    const currentTodo = e.currentTarget.currentTodo;
                    
                    if (e.target.checked) {
                        listItem.classList.add('completed');
                        currentTodo.checklist[itemIndex].completed = true;
                    } else {
                        listItem.classList.remove('completed');
                        currentTodo.checklist[itemIndex].completed = false;
                    }

                    saveMyTodos(filteredTodos);
                }
            });
            
            todoDiv.appendChild(todoChecklist);
        }     


        let todoId = todo.id;

        const completeTodoButton = document.createElement('button');
        completeTodoButton.textContent = 'Complete';
        completeTodoButton.addEventListener('click', () => {         
            markCompleted(todoId);
            renderTodos(filteredTodos);
            
        });

        const editTodoButton = document.createElement('button');
        editTodoButton.textContent = 'Edit';
        editTodoButton.addEventListener('click', () =>{
            editTodoForm(todoId);
        });

        const deleteTodoButton = document.createElement('button');
        deleteTodoButton.textContent = 'Delete';
        deleteTodoButton.addEventListener('click', () => {
            let removeDiv = deleteTodoButton.closest(`[data-todo-id="${todoId}"]`);

            if (removeDiv){
                removeDiv.remove();
            }

            deleteTodo(todoId);
        });

        todoDiv.appendChild(completeTodoButton);
        todoDiv.appendChild(editTodoButton);
        todoDiv.appendChild(deleteTodoButton);
        todoContainer.appendChild(todoDiv);
    });


    body.appendChild(todoContainer)
};