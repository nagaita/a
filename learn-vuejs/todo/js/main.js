var app = new Vue({
  el: '#app',
  data: {
    todoList:[],
    newTodo: '',
    hasError: false
  },
  methods: {
    addTodo: function(event) {
      if (this.newTodo == '') {
        this.hasError = true;
        return ;
      }

      this.todoList.push( {
        title: this.newTodo,
        isDone: false
      });

      this.newTodo = '';
      this.hasError = false;
    },

    deleteTodo: function(index) {
      this.todoList.splice(index, 1)
    }
  }
});
