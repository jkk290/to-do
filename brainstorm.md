Each todo should be created dynamically, using something like a factory or constructor/class.
    
Each todo should track title, description, due date, priority.  Can either be blank text "note" or a checklist.

    Create todo class with constructor with the values title, description, due date, and priority.

    Create extended todo classes to implement todos that will either be a note type or checklist type.

Ability to group todos in different categories or "project".  Newly created todos could be defaulted to uncategorized.

Separate app logic (creating todos, updating todos, etc) from DOM related functions.  Make separate modules and follow SOLID principles.

App UI should be able to view all todos, view todos in each project/category, view/edit individual todos, and delete todos.

Check out date-fns npm library for date functions.

Check out localStorage npm library for persistent todo storage.

    web storage api only stores key:value in strings.  Need to utilize json.stringify to take todo array and turn into a json string.  Then I can store that string into local web storage.

    load mytodos array - check web storage if mytodostring exists, if exist - parse mytodo string to mytodos array.  If not, create empty mytodos array.

    new todo flow - create todo, push to mytodos array, json stringify mytodos array, set mytodostring to web storage.

    edit todo flow - load mytodos array from web storage, find todo to edit in array, update todo info in the array, json stringify mytodos array, remove current mytodos key in web storage, set mytodostring to mytodos key in web storage.

    delete todo flow - load mytodos array from web storage, find todo to delete in array, remove todo from array, json stringify the array, remove current mytodos key in web storage, set mytodostring to mytodos key in web storage.

    Found that after parsing the json string back into an array, the original object methods are no longer available.  1 way to fix is to remove the methods from the class object, and create them as separate functions.

