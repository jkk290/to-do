import { newTodoForm } from "./todoForm";

export function formSelector() {

    const body = document.querySelector('body');
    const selectFormDialog = document.createElement('dialog');
    selectFormDialog.id = 'select-form-dialog';
    body.appendChild(selectFormDialog);

    const closeButton = document.createElement('button');
    closeButton.textContent = 'x';
    closeButton.addEventListener('click', () => {
        selectFormDialog.remove();
    });

    selectFormDialog.appendChild(closeButton);

    const formSelector = document.createElement('select');
    formSelector.id = 'select-form';
    const formSelectorLabel = document.createElement('label');
    formSelectorLabel.textContent = 'Todo type';

    const formOptions = [
        { value: 'standard', text: 'Standard' },
        { value: 'note', text: 'Note' },
        { value: 'checklist', text: 'Checklist' },
    ];

    formOptions.forEach(form => {
        const option = document.createElement('option');
        option.value = form.value;
        option.textContent = form.text;
        formSelector.appendChild(option);
    });

    selectFormDialog.appendChild(formSelectorLabel);
    selectFormDialog.appendChild(formSelector);

    selectFormDialog.showModal();

    const selectedFormDiv = document.createElement('div');
    selectedFormDiv.id = ('selected-form')
    selectFormDialog.appendChild(selectedFormDiv);
    newTodoForm();

    formSelector.addEventListener('change', () => {

        let formSelectorValue = document.getElementById("select-form").value;
        selectedFormDiv.innerHTML = '';
        
        if (formSelectorValue === 'standard') {
            newTodoForm();
        }
    });


};