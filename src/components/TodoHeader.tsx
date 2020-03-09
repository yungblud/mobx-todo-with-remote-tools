import React from "react";
import "./TodoHeader.css";
import TodoInput from "./TodoInput";

const TodoHeader = () => {
  return (
    <div className="todo-header">
      <div className="big-title">Mobx Todo</div>
      <TodoInput />
    </div>
  );
};

export default TodoHeader;
