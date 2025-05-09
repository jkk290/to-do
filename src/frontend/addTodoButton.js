import { newTodoForm } from "./todoForm";

export function createAddButton() {

const body = document.querySelector('body');

const addButton = document.createElement('button');
addButton.textContent = 'New Todo';

addButton.addEventListener('click', () => {
    newTodoForm()
});

body.appendChild(addButton);

};
