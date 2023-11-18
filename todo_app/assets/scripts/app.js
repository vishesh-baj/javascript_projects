class TodoManager {
  constructor() {
    this.todoInput = document.getElementById("todo_input");
    this.addTodoButton = document.querySelector("section form button");
    this.todoContainer = document.querySelector("aside section");
    this.allTodos = [];

    this.addTodoButton.addEventListener("click", this.handleAddTodo.bind(this));
    this.todoContainer.addEventListener(
      "click",
      this.handleTodoContainerClick.bind(this)
    );
  }

  handleAddTodo(e) {
    e.preventDefault();
    const todoObj = {
      id: Math.random(),
      title: this.todoInput.value,
    };
    this.allTodos.push(todoObj);
    this.renderTodo(todoObj);
    this.todoInput.value = "";
    console.log(
      "Clicked on add todo button",
      this.todoInput.value,
      this.allTodos
    );
  }

  renderTodo(todoObj) {
    const todoDiv = document.createElement("div");
    todoDiv.id = todoObj.id;
    todoDiv.innerHTML = `
      <h2>${todoObj.title}</h2>
      <button class="delete_todo">delete</button>
      <button class="edit_todo">edit</button>
    `;
    this.todoContainer.append(todoDiv);
  }

  handleTodoContainerClick(e) {
    if (e.target.classList.contains("delete_todo")) {
      this.deleteTodo(e.target.parentElement.id);
    }
  }

  deleteTodo(id) {
    const updatedTodos = this.allTodos.filter((todo) => todo.id !== id);
    this.allTodos.length = 0;
    this.allTodos.push(...updatedTodos);

    const todoElement = document.getElementById(id);
    todoElement.remove();
  }
}

const todoManager = new TodoManager();
