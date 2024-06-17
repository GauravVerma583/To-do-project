import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export default function Todo() {
  const [input, setInput] = useState(" ");
  const [todo, setTodo] = useState([]);
  const handleAddTodo = () => {
    if (input.trim() !== "") {
      setTodo([...todo, { id: Date.now(), text: input }]);
    }
    setInput([]);
  };
  const handleRemove = () => {
    setTodo([]);
  };
  const handleRemoveTodo = (id) => {
    setTodo(todo.filter((todos) => todos.id !== id));
  };
  const handleEditTodo = (id, newText) => {
    setTodo(
      todo.map((todos) => {
        if (todos.id === id) {
          return { ...todos, text: newText };
        }
        return todos;
      })
    );
  };
  return (
    <div className="mx-auto w-2/4 border-4 border-slate-900 mt-52 text-center bg-slate-300 rounded-2xl font-mono">
      <h1 className="text-7xl font-bold text-center mb-6 mt-10">To Do's</h1>
      <input
        type="text"
        className="mb-10 me-4 px-10 py-4 text-2xl font-semibold"
        placeholder="Add ToDo"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        className="bg-green-500 text-3xl font-bold rounded-sm p-3"
        onClick={handleAddTodo}
      >
        Add ToDO
      </button>
      {todo.map((todos) => (
        <ul key={todos.id} className=" mx-auto w-3/4 flex mb-10 justify-around">
          <span className="text-center block w-1/2 font-serif text-xl font-bold border-2 border-slate-500  text-balance">
            {todos.text}
          </span>
          <div>
            <button
              onClick={() => {
                handleEditTodo(todos.id, prompt("edit todo", todos.text));
              }}
              className="bg-yellow-500 me-4 ms-4 p-4 text-2xl rounded-md"
            >
              <MdEdit />
            </button>
            <button
              onClick={() => {
                handleRemoveTodo(todos.id);
              }}
              className="bg-red-500 me-4 ms-4 p-4 text-2xl rounded-md"
            >
              <MdDelete />
            </button>
          </div>
        </ul>
      ))}
      <button onClick={handleRemove}>RemoveAll</button>
    </div>
  );
}
