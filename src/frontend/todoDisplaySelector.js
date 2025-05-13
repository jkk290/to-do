import myTodos from "../myTodos";

export function selectTodoDisplay() {
    const body = document.querySelector('body');

    const categorySelector = document.createElement('select');
    categorySelector.id = 'select-category';
    const categorySelectorLabel = document.createElement('label');
    categorySelectorLabel.textContent = 'Filter by category';

    const categoryOptions = [];

    myTodos.forEach(todo => {
        categoryOptions.push({ value: todo.category, text: todo.category });
    });
    
    console.log('Fetching category options...');
    console.log(categoryOptions);

    categoryOptions.forEach(form => {
        const option = document.createElement('option');
        option.value = form.value;
        option.textContent = form.text;
        categorySelector.appendChild(option);
    });

    body.appendChild(categorySelectorLabel);
    body.appendChild(categorySelector);

};