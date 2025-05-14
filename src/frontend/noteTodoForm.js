import { createTodo } from "../todoFactory.js";
import myTodos from "../myTodos";
import * as storageUtils from "../storageUtils.js";
import { renderTodos } from "./renderTodos.js";

export function newNoteTodoForm() {

  const selectedFormDialog = document.getElementById('select-form-dialog');
  const selectedFormDiv = document.getElementById('selected-form');

  const newNoteTodoForm = document.createElement('form');
  newNoteTodoForm.id = 'new-note-todo-form';

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

  const noteInput = document.createElement('textarea');
  noteInput.setAttribute('type', 'textarea');
  noteInput.setAttribute('id', 'note');
  noteInput.setAttribute('name', 'note');
  const noteLabel = document.createElement('label');
  noteLabel.textContent = 'Note';

  const formFields = [
    { label: titleLabel, input: titleInput },
    { label: descriptionLabel, input: descriptionInput },
    { label: dueDateLabel, input: dueDateInput },
    { label: priorityLabel, input: priorityInput },
    { label: categoryLabel, input: categoryInput },
    { label: noteLabel, input: noteInput }
  ];
    
  formFields.forEach(field => {
    newNoteTodoForm.appendChild(field.label);
    newNoteTodoForm.appendChild(document.createElement('br'));
    newNoteTodoForm.appendChild(field.input);
    newNoteTodoForm.appendChild(document.createElement('br'));
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
    let noteValue = document.getElementById("note").value;
    createTodo(titleValue, descriptionValue, dueDateValue, priorityValue, categoryValue, noteValue);

    storageUtils.saveMyTodos(myTodos);
    selectedFormDialog.remove();
    renderTodos(myTodos);

  });

  newNoteTodoForm.appendChild(submitButton);

  selectedFormDiv.appendChild(newNoteTodoForm);
    
};