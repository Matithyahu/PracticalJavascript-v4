var todoList = {
  todos: [],
  displayTodos: function() {
    var loopTodos = function() {
      for (var i = 0; i < todoList.todos.length; i++){
        console.log(" * " + todoList.todos[i].todoText );
        }
    }
    console.log("My Todos: ");
    loopTodos();
  },

  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos(); // Display aftr adding a todo
  },

  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },

  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    if (this.todos[position].completed === true) {
      this.todos[position].completed = false;
    } else {
      this.todos[position].completed = true;
    }
  }
}
