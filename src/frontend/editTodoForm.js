import myTodos from "../myTodos";
import { editTodo } from "../editTodo.js";
import * as storageUtils from "../storageUtils.js";
import { renderTodos } from "./renderTodos.js";

export function editTodoForm() {
  const body = document.querySelector('body');
  const editTodoDialog = document.createElement('dialog');
  editTodoDialog.id = 'edit-todo-dialog';
  body.appendChild(editTodoDialog);

  const closeButton = document.createElement('button');
  closeButton.textContent = 'x';
  closeButton.addEventListener('click', () => {
    editTodoDialog.close();
  });
  editTodoDialog.appendChild(closeButton);

  const editTodoForm = document.createElement('form');
  editTodoForm.id = 'edit-todo-form';


  let editTodoId = 

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
    editTodoForm.appendChild(field.label);
    editTodoForm.appendChild(document.createElement('br'));
    editTodoForm.appendChild(field.input);
    editTodoForm.appendChild(document.createElement('br'));
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
    editTodoDialog.remove();
    renderTodos();

  });

  editTodoForm.appendChild(submitButton);

  editTodoDialog.appendChild(editTodoForm);


  editTodoDialog.showModal();
    
};