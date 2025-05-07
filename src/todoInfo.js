export function info(todo) {
    console.log(
        `ID: ${todo.id}
        Title: ${todo.title}
        Description: ${todo.description}
        Due Date: ${todo.dueDate}
        Priority: ${todo.priority}
        Completed: ${todo.completed}
        Category: ${todo.category}`)

};