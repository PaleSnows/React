import React, { useState } from "react";
import { useTodo } from "../context";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();
  const add = (e) => {
    e.prevenrtDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };
  return (
    <form onSubmit={add} className="flex">
      <input
        className=""
        type="text"
        placeholder="Write Todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button></button>
    </form>
  );
};

export default TodoForm;
