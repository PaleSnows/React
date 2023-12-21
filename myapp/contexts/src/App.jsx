import { useEffect, useState } from "react";
import { TodoProvider } from "./context";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  // //local storage part//
  // useEffect(() => {
  //   const todos = JSON.parse(localStorage.getItem("todos"));
  //   if (todos && todos.length > 0) {
  //     setTodos(todos);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  return (
    <>
      <TodoProvider
        value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
      >
        <div className="bg-[#172842] w-screen h-screen p-8 ">
          <div className="w-full max-w-2xl  mx-auto  rounded-lg px-4 py-3 text-white">
            <h1 className="text-3xl font-bold text-center mb-8 mt-2">
              Manage Your Todos
            </h1>
            <div className="mb-4">{/* Todo form goes here */}</div>
            <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
            </div>
          </div>
        </div>
      </TodoProvider>
      <TodoForm />
    </>
  );
}

export default App;
