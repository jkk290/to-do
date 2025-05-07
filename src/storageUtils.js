export function loadMyTodos() {      
    let myTodosString = localStorage.getItem('myTodos');  

    if (myTodosString != null) {
        let arrayString = JSON.parse(myTodosString);

        return arrayString;

    } else {

        return

    }
};

export function saveMyTodos(myTodos) {

    let myTodosString = localStorage.getItem('myTodos');

    let jsonString = JSON.stringify(myTodos);

    if (myTodosString != null) {
        localStorage.removeItem('myTodos');

        localStorage.setItem('myTodos', jsonString);
        
    } else {

        localStorage.setItem('myTodos', jsonString);
        
    }

};

