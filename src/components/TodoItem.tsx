import React from "react";
import { inject } from "mobx-react";
import { Todo } from "../types/Todo";
import "./TodoItem.css";

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  return <div className="todo-item">{todo.todo}</div>;
};

export default inject(({ todoStore }) => ({}))(TodoItem);
