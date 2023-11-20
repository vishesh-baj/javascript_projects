import { useState } from "react";

const TodosPage = () => {
  const [allTodos, setallTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    setallTodos((prevState) => {
      return [...prevState, todoInput];
    });
  };

  const handleTodoChange = (e) => {
    setTodoInput(e.target.value);
  };

  return (
    <div className="w-[50%] mx-auto">
      <div className="px-4 py-8 flex justify-center">
        <form onSubmit={handleSubmit} className="flex gap-4">
          <input
            className="input input-primary"
            type="text"
            placeholder="enter todo"
            value={todoInput}
            onChange={handleTodoChange}
          />
          <button type="submit" className="btn btn-primary">
            Add todo
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodosPage;
