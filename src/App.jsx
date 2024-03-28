import { useState } from "react";
import React from "react";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function hChange(e) {
    setInputValue(e.target.value);
  }

  function hSubmit(e) {
    e.preventDefault();
    setTodos([...todos, inputValue]);
    setInputValue('');
  }

  function hDelete(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <>
      <div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>

        <form>
          <input type="text" value={inputValue} onChange={hChange} />
          <button onClick={hSubmit}>Add Todo</button>
        </form>
        <ul>
          {todos.map(( item , index) => (
            <li key={index}>
              {item}
              <button onClick={()=> hDelete(index)}>delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
