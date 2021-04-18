import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import "./TodoItem.css";
import { checkTodo } from "../features/todoSlice";
import { useDispatch } from "react-redux";

const TodoList = ({ text, id, done }) => {
  const dispatch = useDispatch();
  const handleCheck = () => dispatch(checkTodo({ id, done }));

  return (
    <div className="todoItem">
      <Checkbox
        checked={done}
        color="primary"
        onChange={handleCheck}
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <p className={done ? "todoItem--done" : ""}>{text}</p>
    </div>
  );
};

export default TodoList;
