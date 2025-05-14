import myTodos from "../myTodos";
import { categorizedTodo } from "../categorizeTodos";
import { renderTodos } from "./renderTodos";

export function selectTodoDisplay() {
    const body = document.querySelector('body');

    const categorySelector = document.createElement('select');
    categorySelector.id = 'select-category';
    const categorySelectorLabel = document.createElement('label');
    categorySelectorLabel.textContent = 'Filter by category';

    const categoryOptions = [{ value: 'all', text: 'All' }];
    const trackCategories = [];

    myTodos.forEach(todo => {

        const normalizedCategory = todo.category.toLowerCase();
    
   
        if (!trackCategories.includes(normalizedCategory)) {
      
            trackCategories.push(normalizedCategory);
            categoryOptions.push({ value: todo.category, text: todo.category });
        };

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

    categorySelector.addEventListener('change', () => {
    
            let categorySelectorValue = document.getElementById("select-category").value;

            if (categorySelectorValue === 'all') {
                renderTodos(myTodos);
            } else {
                let filteredTodos = categorizedTodo(myTodos, categorySelectorValue);
                renderTodos(filteredTodos);
            }

        });

};