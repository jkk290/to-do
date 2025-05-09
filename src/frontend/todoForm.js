import { createTodo } from "../todoFactory.js";
import myTodos from "../myTodos";
import * as storageUtils from "../storageUtils.js";

export function newTodoForm() {
    const body = document.querySelector('body');
    const todoDialog = document.createElement('dialog');
    todoDialog.id = 'new-todo-dialog';
    body.appendChild(todoDialog);

    const closeButton = document.createElement('button');
    closeButton.textContent = 'x';
    closeButton.addEventListener('click', () => {
      todoDialog.close();
    });
    todoDialog.appendChild(closeButton);

    const newTodoForm = document.createElement('form');
    newTodoForm.id = 'new-todo-form';

    const titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('id', 'title');
    titleInput.setAttribute('name', 'title');
    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title';

    const descriptionInput = document.createElement('textarea');
    descriptionInput.setAttribute('type', 'textarea');
    descriptionInput.setAttribute('id', 'description');
    descriptionInput.setAttribute('name', 'description');
    const descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Description';
    
    const dueDateInput = document.createElement('input');
    dueDateInput.setAttribute('type', 'date');
    dueDateInput.setAttribute('id', 'dueDate');
    dueDateInput.setAttribute('name', 'dueDate');
    const dueDateLabel = document.createElement('label');
    dueDateLabel.textContent = 'Due Date';
    
    const priorityInput = document.createElement('select');
    priorityInput.setAttribute('id', 'priority');
    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority';
    const priorityOptions = [
        { value: '', text: 'Select the priority'},
        { value: 'low', text: 'Low'},
        { value: 'medium', text: 'Medium'},
        { value: 'high', text: 'High'},
    ];

    priorityOptions.forEach(priority => {
        const option = document.createElement('option');
        option.value = priority.value;
        option.textContent = priority.text;
        priorityInput.appendChild(option);
    });

    
    const categoryInput = document.createElement('input');
    categoryInput.setAttribute('type', 'text');
    categoryInput.setAttribute('id', 'category');
    categoryInput.setAttribute('name', 'category');
    const categoryLabel = document.createElement('label');
    categoryLabel.textContent = 'Category';

    const formFields = [
      { label: titleLabel, input: titleInput },
      { label: descriptionLabel, input: descriptionInput },
      { label: dueDateLabel, input: dueDateInput },
      { label: priorityLabel, input: priorityInput },
      { label: categoryLabel, input: categoryInput }
    ];
      
    formFields.forEach(field => {
      newTodoForm.appendChild(field.label);
      newTodoForm.appendChild(document.createElement('br'));
      newTodoForm.appendChild(field.input);
      newTodoForm.appendChild(document.createElement('br'));
    });

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Create todo';

    submitButton.addEventListener("click", function(e) {
      e.preventDefault();

      let titleValue = document.getElementById("title").value;
      let descriptionValue = document.getElementById("description").value;
      let dueDateValue = document.getElementById("dueDate").value;
      let priorityValue = document.getElementById("priority").value;
      let categoryValue = document.getElementById("category").value;
      createTodo(titleValue, descriptionValue, dueDateValue, priorityValue, categoryValue);
      storageUtils.saveMyTodos(myTodos);
      todoDialog.close();

    });

    newTodoForm.appendChild(submitButton);

    todoDialog.appendChild(newTodoForm);


todoDialog.showModal();
    



};