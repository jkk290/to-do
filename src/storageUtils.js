export function loadMyTodos() {      
    let myTodosString = localStorage.getItem('myTodos');  

    console.log(`Retrieving from local storage...${myTodosString}`);

    if (myTodosString != null) {
        let array = JSON.parse(myTodosString);
        console.log(`Parsing string...`);
        console.log(array);
        return array;

    } else {

        return [];

    }
};

export function saveMyTodos(myTodos) {

    let jsonString = JSON.stringify(myTodos);
    console.log(`Saving to storage...${jsonString}`);
    localStorage.setItem('myTodos', jsonString);
        

};

