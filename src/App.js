import "./App.scss";
import { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love Easy Frontend! 😍 " },
    { id: 2, title: "We love Easy Frontend! 🥰 " },
    { id: 3, title: "They love Easy Frontend! 🚀 " },
  ]);
  const handleTodoClick = (todo) => {
    const todoIndex = todoList.findIndex((item) => item.id === todo.id);
    if (todoIndex < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(todoIndex, 1);
    setTodoList(newTodoList);
  };
  return (
    <div className="app">
      <h1>Todo List </h1>
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
