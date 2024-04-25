// import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Header from "./Header/Header";
import TodoList from "./TodoList/TodoList";
import AddTodo from "./AddTodo/AddTodo";

const jsxElement = (
  <div className="app">
    <Header />
    <TodoList />
    <AddTodo />
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(jsxElement);
