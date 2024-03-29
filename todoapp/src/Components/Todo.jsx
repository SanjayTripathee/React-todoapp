import { useState } from "react";

import TOdoList from "./TodoList";
import Form from "./Form";

export default function Todo() {
  const [todo, setTodo] = useState(""); //store current value in variable i.e todo
  const [todos, setTodos] = useState([]); //store entire thing including previous enter data also

  return (
    <div>
      {/* psssing props from parent to child as they required */}
      <Form setTodo={setTodo} todo={todo} todos={todos} setTodos={setTodos} />
      <TOdoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
