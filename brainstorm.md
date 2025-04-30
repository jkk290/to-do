Each todo should be created dynamically, using something like a factory or constructor/class.
    
Each todo should track title, description, due date, priority.  Can either be blank text "note" or a checklist.

    Create todo class with constructor with the values title, description, due date, and priority.

    Create extended todo classes to implement todos that will either be a note type or checklist type.

Ability to group todos in different categories or "project".  Newly created todos could be defaulted to uncategorized.

Separate app logic (creating todos, updating todos, etc) from DOM related functions.  Make separate modules and follow SOLID principles.

App UI should be able to view all todos, view todos in each project/category, view/edit individual todos, and delete todos.

Check out date-fns npm library for date functions.

Check out localStorage npm library for persistent todo storage.