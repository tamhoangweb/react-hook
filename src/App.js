import "./App.scss";

import { useEffect, useState } from "react";
import queryString from "query-string";
import Pagination from "./components/Pagination";
import PostList from "./components/PostList";

function App() {
  // const [todoList, setTodoList] = useState([
  //   { id: 1, title: "I love Easy Frontend! 😍 " },
  //   { id: 2, title: "We love Easy Frontend! 🥰 " },
  //   { id: 3, title: "They love Easy Frontend! 🚀 " },
  // ]);
  const [posts, setPosts] = useState([]);
  const [pagination, setPagination] = useState({
    _limit: 10,
    _page: 1,
    _totalRows: 11,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });
  useEffect(() => {
    const fetchData = async () => {
      const paramString = queryString.stringify(filters);
      const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
      try {
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log(responseJSON);
        const { data, pagination } = responseJSON;
        setPosts(data);
        setPagination(pagination);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
    console.log("POST EFFECT");
  }, [filters]);
  useEffect(() => {
    console.log("TO Effect");
  });
  const handlePaginationChange = (newPage) => {
    setFilters({
      ...filters,
      _page: newPage,
    });
  };
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
      <Pagination
        pagination={pagination}
        onPaginationChange={handlePaginationChange}
      />
      {/* <TodoForm onSubmitForm={handleSubmitForm} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}
    </div>
  );
}

export default App;
