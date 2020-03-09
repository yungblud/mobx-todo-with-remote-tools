import React from "react";
import { Provider } from "mobx-react";
import TodoStore from "./store/TodoStore";
import TodoList from "./components/TodoList";
import TodoHeader from "./components/TodoHeader";
import "./App.css";

function App() {
  return (
    <Provider todoStore={new TodoStore()}>
      <div className="todo-wrapper">
        <TodoHeader />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
