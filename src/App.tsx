import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { SocialTodoList } from "./components/SocialTodoList";
import UpdateSocialTodo from "./components/UpdateSocialTodo";
import AddPostSocialTodo from "./components/AddPostSocialTodo";

function App() {
  return (
    <div className="App">
      <SocialTodoList></SocialTodoList>
      <AddPostSocialTodo></AddPostSocialTodo>
      <UpdateSocialTodo></UpdateSocialTodo>
    </div>
  );
}

export default App;
