import { createTodo } from "../todoFactory.js";
import myTodos from "../myTodos";
import * as storageUtils from "../storageUtils.js";
import { renderTodos } from "./renderTodos.js";

export function newChecklistTodoForm() {

  const selectedFormDialog = document.getElementById('select-form-dialog');
  const selectedFormDiv = document.getElementById('selected-form');

  const newChecklistTodoForm = document.createElement('form');
  newChecklistTodoForm.id = 'new-checklist-todo-form';

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

  const checklistContainer = document.createElement('div');
  checklistContainer.id = 'checklist-container';

  const checklistLabel = document.createElement('label');
  checklistLabel.textContent = 'Checklist items';
  const checklistInput = document.createElement('input');
  checklistInput.type = 'text';
  checklistInput.classList = 'checklist-input';
  checklistContainer.appendChild(checklistLabel);
  checklistContainer.appendChild(document.createElement('br'));
  checklistContainer.appendChild(checklistInput);

  const addChecklistItemButton = document.createElement('button');
  addChecklistItemButton.textContent = 'Add new item';
  addChecklistItemButton.addEventListener('click', (e) => {
    e.preventDefault();

    const newChecklistInput = document.createElement('input');
    newChecklistInput.type = 'text';    
    newChecklistInput.classList = 'checklist-input';
    checklistContainer.appendChild(document.createElement('br'));
    checklistContainer.appendChild(newChecklistInput);    
  });

  const formFields = [
    { label: titleLabel, input: titleInput },
    { label: descriptionLabel, input: descriptionInput },
    { label: dueDateLabel, input: dueDateInput },
    { label: priorityLabel, input: priorityInput },
    { label: categoryLabel, input: categoryInput }
  ];
    
  formFields.forEach(field => {
    newChecklistTodoForm.appendChild(field.label);
    newChecklistTodoForm.appendChild(document.createElement('br'));
    newChecklistTodoForm.appendChild(field.input);
    newChecklistTodoForm.appendChild(document.createElement('br'));
  });

  newChecklistTodoForm.appendChild(checklistContainer);
  newChecklistTodoForm.appendChild(addChecklistItemButton);

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

    const checklistInputs = document.querySelectorAll('.checklist-input');
    console.log('checklist inputs');
    console.log(checklistInputs);
    const checklistArray = [];

    checklistInputs.forEach(input => {
        checklistArray.push({ value: input.value, completed: false });
    });

    console.log(`creating checklist array...`);
    console.log(checklistArray);
    createTodo(titleValue, descriptionValue, dueDateValue, priorityValue, categoryValue, undefined, checklistArray);

    storageUtils.saveMyTodos(myTodos);
    selectedFormDialog.remove();
    renderTodos(myTodos);

  });

  newChecklistTodoForm.appendChild(submitButton);

  selectedFormDiv.appendChild(newChecklistTodoForm);
    
};