import React from "react";
import { inject } from "mobx-react";
import { Todo } from "../types/Todo";
import "./TodoItem.css";

interface Props {
  todo: Todo;
  setChecked: (id: number) => void;
}

const TodoItem = ({ todo, setChecked }: Props) => {
  const onClick = (e: any) => {
    e.preventDefault();
    setChecked(todo.id);
  };
  return (
    <div
      className={"todo-item" + (todo.checked ? " checked" : "")}
      onClick={onClick}
    >
      {todo.todo}
    </div>
  );
};

export default inject(({ todoStore }) => ({
  setChecked: todoStore.setChecked
}))(TodoItem as any);
