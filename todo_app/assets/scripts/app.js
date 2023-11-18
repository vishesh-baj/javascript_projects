const todoInput = document.getElementById("todo_input");
const addTodoButton = document.querySelector("section form button");
const todoContainer = document.querySelector("aside section");
const allTodos = [];

const deleteTodo = (id) => {
  // Remove the todo from the allTodos array
  const updatedTodos = allTodos.filter((todo) => todo.id !== id);
  allTodos.length = 0;
  allTodos.push(...updatedTodos);

  // Remove the todo element from the DOM
  const todoElement = document.getElementById(id);
  todoElement.remove();
};

addTodoButton.addEventListener("click", (e) => {
  e.preventDefault();
  const todoObj = {
    id: Math.random(),
    title: todoInput.value,
  };
  allTodos.push(todoObj);
  const todoDiv = document.createElement("div");
  todoDiv.id = todoObj.id;
  todoDiv.innerHTML = `
    <h2>${todoObj.title}</h2>
    <button  class="delete_todo">delete</button>
    <button class="edit_todo">edit</button>
    `;
  todoContainer.append(todoDiv);
  todoInput.value = "";
  console.log("Clicked on add todo button", todoInput.value, allTodos);
});

todoContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete_todo")) {
    deleteTodo(e.target.parentElement.id);
  }
});

