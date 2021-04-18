import React from "react";
import "./App.css";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";
import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";

function App() {
  const todoList = useSelector(selectTodoList);
  return (
    <div className="app">
      <h1>clever programmer</h1>
      <div className="app__container">
        <div className="app__todoContainer">
          {todoList.map(({ text, done, id }) => (
            <TodoItem text={text} key={id} id={id} done={done} />
          ))}
        </div>
      </div>

      <Input />
    </div>
  );
}

export default App;
