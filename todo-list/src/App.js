import Todos from "./Todos";
import { useState } from "react";

function App() {
  const currentDate = new Date();
  const [todo, setTodo] = useState([]);
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleClick() {
    if (todo.length === 0) {
      return;
    } else {
      setTodos([...todos, todo[todo.length - 1]]);
      setInputValue("");
      setTodo([]);
      // console.log(todos);
    }
  }

  function handleDelete(index) {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <p>Current Date: {currentDate.toLocaleDateString()}</p>
      <div className="new-todo">
        <button className="add-list" onClick={handleClick}>
          +
        </button>
        <input
          type="text"
          placeholder="New Todo: "
          className="input-list"
          value={inputValue}
          onChange={(e) => {
            setTodo([...todo, e.target.value]);
            setInputValue(e.target.value);
            // console.log(todo);
          }}
        ></input>
      </div>

      <Todos list={todos} delTodo={handleDelete} />
    </div>
  );
}

export default App;
