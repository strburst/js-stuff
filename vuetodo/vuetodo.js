var app = new Vue({
  el: '#page',

  data: {
    changed: false,
    todos: [],
  },

  created: function() {
    const raw = localStorage.getItem('todos');
    if (raw) {
      this.todos = JSON.parse(raw);
    }
  },

  methods: {

    /**
     * Read the contents of the textbox and enter a new todo item.
     * @param evt event object
     */
    enterTodo: function(evt) {
      const textBox = evt.target;
      if (textBox.value !== '') {
        this.todos.push({
          text: textBox.value,
          completed: false,
        });

        textBox.value = '';
        this.changed = true;
      }
    },

    /**
     * Toggle the completion status of a todo item.
     * @param evt event object
     */
    completeTodo: function(evt) {
      const todo = evt.target;
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].text === todo.innerText) {
          this.todos[i].completed = !this.todos[i].completed;
          this.changed = true;
          break;
        }
      }
    },

    /**
     * Toggle the completion status of a todo item.
     */
    clearCompleted: function() {
      this.todos = this.todos.filter(function(todo) {
        if (todo.completed) {
          this.changed = true;
          return false;
        } else {
          return true;
        }
      });
    },

    /**
     * Write todos to localStorage.
     */
    save: function() {
      localStorage.setItem('todos', JSON.stringify(this.todos));
      this.changed = false;
    },

    /**
     * Delete all todos.
     */
    deleteAll: function() {
      this.todos = [];
      this.changed = true;
    },

  },
});
