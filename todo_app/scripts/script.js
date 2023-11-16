"use strict";

class App {
  constructor(layout) {
    this.layout = layout;
  }

  init() {
    const root = document.getElementById("app");
    for (const renderedUi of this.layout) {
      root.append(renderedUi);
    }
  }
}

class Container {
  constructor(nodeType) {
    this.nodeType = nodeType;
  }
  createNode() {
    return document.createElement(this.nodeType);
  }
}

class Todos {
  allTodos = [];
  inputValue = "";

  todoInputElement = new Container("input").createNode();
  addTodoButton = new Container("button").createNode();
  todoList = new Container("ul").createNode(); // Added a new Container for the todo list
  inputContainer = new Container("div").createNode();

  inputLogic(inputElement) {
    this.inputValue = inputElement.value;
    inputElement.setAttribute("placeholder", "Enter Input");
    inputElement.className = "text-black";
    inputElement.addEventListener("input", (e) => {
      this.inputValue = e.target.value;
    });
  }

  buttonLogic(buttonElement) {
    buttonElement.textContent = "Add Todo";
    buttonElement.className = "px-3 py-2 bg-teal-400";
    buttonElement.addEventListener("click", () => {
      console.log("INPUT VALUE: ", this.inputValue);

      if (this.inputValue.length === 0) {
        alert("Cannot add empty value");
        return;
      }

      this.allTodos.push({
        id: Math.random(),
        title: this.inputValue,
        date: new Date(),
      });
      console.log("ALL TODOS: ", this.allTodos);

      // Clear the input field after adding a todo
      this.todoInputElement.value = "";

      // Display all todos
      this.renderTodos();
    });
  }

  inputContainerLogic(inputContainerElement) {
    inputContainerElement.className = "flex justify-center items-center";
    inputContainerElement.appendChild(this.todoInputElement);
    inputContainerElement.appendChild(this.addTodoButton);
    inputContainerElement.appendChild(this.todoList); // Append the todo list container
    console.log("INPUT CONTAINER: ", inputContainerElement);
  }

  renderTodos() {
    // Clear existing todos
    this.todoList.innerHTML = "";

    // Render each todo
    this.allTodos.forEach((todo) => {
      const todoItem = new Container("li").createNode();
      todoItem.textContent = todo.title;
      this.todoList.appendChild(todoItem);
    });
  }

  render() {
    // input logic
    this.inputLogic(this.todoInputElement);
    // button Logic
    this.buttonLogic(this.addTodoButton);
    // input container logic
    this.inputContainerLogic(this.inputContainer);

    return this.inputContainer;
  }
}

const todoApp = new App([new Todos().render()]);

todoApp.init();
