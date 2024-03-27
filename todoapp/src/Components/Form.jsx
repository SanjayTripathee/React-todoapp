import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todo, setTodo, todos, setTodos }) {
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContaner}>
        <input
          className={styles.modernInput}
          placeholder="Enter todo item"
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          value={todo}
        />
        <button className={styles.modernButton}>Add</button>
      </div>
    </form>
  );
}
