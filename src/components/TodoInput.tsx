import React, { useState } from "react";
import "./TodoInput.css";
import { inject } from "mobx-react";

interface Props {
  addTodo(todo: string): void;
}

const TodoInput = ({ addTodo }: Props) => {
  const [value, setValue] = useState("");

  const onChange = (e: any) => {
    const { value } = e.target;
    setValue(value);
  };

  const onKeyPress = (e: any) => {
    if (e.key === "Enter") {
      if (value === "") return;
      addTodo(value);
      setValue("");
    }
  };

  return (
    <input
      type="text"
      name="todoInput"
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  );
};

export default inject(({ todoStore }) => ({
  addTodo: todoStore.addTodo
}))(TodoInput as any);
