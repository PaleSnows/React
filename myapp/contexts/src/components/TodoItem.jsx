import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [fieldMSg, setFieldMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo;
  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: fieldMSg });
    setIsTodoEditable(false);
  };
  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };
  return (
    <div>
      <input />
      <button></button>
    </div>
  );
};

export default TodoItem;
