/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of this.todos
    - remove(indexOfTodo): remove todo from list of this.todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all this.todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all this.todos

  Once you've implemented the logic, test your code by running
*/

class Todo {

  constructor(){
    this.todos = [];
  }
  add(todo){
    this.todos.push(todo);
  }
  remove(i_todo){
    this.todos.splice(i_todo,1);
  }
  update(i_todo,u_todo){
    if (i_todo < this.todos.length){
      this.todos[i_todo] = u_todo;
    }
  }
  getAll(){
    return this.todos;
    // for (var i = 1; i<(this.todos.length+1); i++){
    //   console.log(`${i}: ${this.todos[i-1]}`);
    // }
  }
  get(i_todo){
    if (i_todo < this.todos.length){
      return this.todos[i_todo];
    }
    return null;
  }
  clear(){
    this.todos = [];
  }

}

a = new Todo();
a.add("1");
a.getAll();

module.exports = Todo;
