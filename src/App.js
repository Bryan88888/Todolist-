import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Todos from "./components/Todos";

const initialTodos = [
  {
    title: "be human",
    isComplete: true,
  },
  {
    title: "get rich",
    isComplete: false,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [input, setInput] = useState('');

  const handleInput = (event) => {
    setInput(event.target.value);
    console.log(input);
  };

  const handleCheck = (index) => {
    const nextTodos = [...todos];
    nextTodos[index].isComplete = !nextTodos[index].isComplete;
    setTodos(nextTodos);
  };

  const handleAdd = () => {
    const newTodos = { title: input, isComplete: false };

    const nextTodos = [...todos];
    nextTodos.push(newTodos);

    setTodos(nextTodos);
    setInput("");
  };


  return (
    <div className="App">
      <header className="App-header">
        <Todos handleCheck={handleCheck} todos={todos} />
        <Form handleInput={handleInput} handleAdd={handleAdd} />
      </header>
    </div>
  );
}

export default App;
