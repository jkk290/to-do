export function createAddButton() {

const body = document.querySelector('body');

const addButton = document.createElement('button');
addButton.textContent = 'New Todo';

// addButton.addEventListener('click', e => {
    
// });

body.appendChild(addButton);

};
