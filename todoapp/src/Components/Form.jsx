import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todo, setTodo, todos, setTodos }) {
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContaner}>
        <input
          className={styles.modernInput}
          placeholder="Enter todo item"
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          type="text"
          value={todo.name}
        />
        <button className={styles.modernButton}>Add</button>
      </div>
    </form>
  );
}
