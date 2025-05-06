import myTodos from "./myTodos";

export function loadMyTodos() {      
    let myTodosString = localStorage.getItem('myTodos');  

    if (myTodosString != null) {
        myTodos = JSON.parse(myTodosString);

        return myTodos;
    } else {
        return

    }
};

export function saveMyTodos() {

    let myTodosString = localStorage.getItem('myTodos');

    let jsonString = JSON.stringify(myTodos);

    if (myTodosString != null) {
        localStorage.removeItem('myTodos');

        localStorage.setItem('myTodos', jsonString);
        
    } else {

        localStorage.setItem('myTodos', jsonString);
        
    }

};

