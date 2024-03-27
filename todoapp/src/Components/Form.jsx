import { useState } from "react";

export default function Form({ todo, setTodo, todos, setTodos }) {
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          value={todo}
        />
        <button>Add</button>
      </form>
    </div>
  );
}
