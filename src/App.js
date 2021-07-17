import "./App.scss";

import { useEffect, useState } from "react";

import PostList from "./components/PostList";

function App() {
  // const [todoList, setTodoList] = useState([
  //   { id: 1, title: "I love Easy Frontend! 😍 " },
  //   { id: 2, title: "We love Easy Frontend! 🥰 " },
  //   { id: 3, title: "They love Easy Frontend! 🚀 " },
  // ]);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const requestUrl =
        "http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1";
      try {
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log(responseJSON);
        const { data } = responseJSON;
        setPosts(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
    console.log("POST EFFECT");
  }, []);
  useEffect(() => {
    console.log("TO Effect");
  });

  // const handleTodoClick = (todo) => {
  //   const todoIndex = todoList.findIndex((item) => item.id === todo.id);
  //   if (todoIndex < 0) return;
  //   const newTodoList = [...todoList];
  //   newTodoList.splice(todoIndex, 1);
  //   setTodoList(newTodoList);
  // };
  // const handleSubmitForm = (formValues) => {
  //   const newTodo = { id: new Date().getTime().toString(), ...formValues };
  //   const newTodoList = [...todoList];
  //   newTodoList.push(newTodo);
  //   setTodoList(newTodoList);
  // };
  return (
    <div className="app">
      <h1>Post List </h1>
      <PostList posts={posts} />
      {/* <TodoForm onSubmitForm={handleSubmitForm} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}
    </div>
  );
}

export default App;
