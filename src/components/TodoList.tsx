import React from "react";
import { inject, observer } from "mobx-react";
import TodoItem from "./TodoItem";
import { Todo } from "../types/Todo";
import "./TodoList.css";

interface Props {
  todos: Todo[];
}

const TodoList = ({ todos }: Props) => {
  const todoList = todos.map(todo => <TodoItem key={todo.id} todo={todo} />);
  return <div className="todo-list">{todoList}</div>;
};

export default inject(({ todoStore }) => ({
  todos: todoStore.todos
}))(observer(TodoList as any));
