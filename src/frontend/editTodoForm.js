import myTodos from "../myTodos";
import { editTodo } from "../editTodo.js";
import * as storageUtils from "../storageUtils.js";
import { renderTodos } from "./renderTodos.js";
import { getTodoIndex } from "../getTodoIndex.js";

export function editTodoForm(id) {
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


  let editTodoId = id;

  let index = getTodoIndex(editTodoId);

  const titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.id = 'title';
  titleInput.name = 'title';
  titleInput.value = myTodos[index].title;
  const titleLabel = document.createElement('label');
  titleLabel.textContent = 'Title';

  const descriptionInput = document.createElement('textarea');
  descriptionInput.setAttribute ('type', 'textarea');
//   descriptionInput.type = 'textarea';
  descriptionInput.id = 'description';
  descriptionInput.name = 'description';
  descriptionInput.value = myTodos[index].description;
  const descriptionLabel = document.createElement('label');
  descriptionLabel.textContent = 'Description';
  
  const dueDateInput = document.createElement('input');
  dueDateInput.type = 'date';
  dueDateInput.id = 'dueDate';
  dueDateInput.name = 'dueDate';
  dueDateInput.value = myTodos[index].dueDate;
  const dueDateLabel = document.createElement('label');
  dueDateLabel.textContent = 'Due Date';
  
  const priorityInput = document.createElement('select');
  priorityInput.id = 'priority';
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

  priorityInput.value = myTodos[index].priority;

  
  const categoryInput = document.createElement('input');
  categoryInput.type = 'text';
  categoryInput.id = 'category';
  categoryInput.name = 'category';
  categoryInput.value = myTodos[index].category;
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
    editTodo(titleValue, descriptionValue, dueDateValue, priorityValue, categoryValue, editTodoId);

    storageUtils.saveMyTodos(myTodos);
    editTodoDialog.remove();
    renderTodos();

  });

  editTodoForm.appendChild(submitButton);

  editTodoDialog.appendChild(editTodoForm);


  editTodoDialog.showModal();
    
};