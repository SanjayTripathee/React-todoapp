import TodoItem from "./TodoItem";

export default function TOdoList({ todos }) {
  return (
    <div>
      {todos.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
    </div>
  );
}
