import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";

export default function TOdoList({ todos, setTodos }) {
  // slice will create a copy of todo array and in that slice array we will use sort method
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sortedTodos.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
