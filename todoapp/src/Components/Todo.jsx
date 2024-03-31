import { useState } from "react";

import TOdoList from "./TodoList";
import Form from "./Form";
import Footer from "./Footer";

export default function Todo() {
  const [todo, setTodo] = useState({ name: "", done: false }); //store current value in variable i.e todo
  const [todos, setTodos] = useState([]); //store entire thing including previous enter data also
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;
  return (
    <div>
      {/* psssing props from parent to child as they required */}
      <Form setTodo={setTodo} todo={todo} todos={todos} setTodos={setTodos} />
      <TOdoList todos={todos} setTodos={setTodos} />
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </div>
  );
}
