import React from "react";
import { Provider } from "mobx-react";
// import TodoStore from "./store/TodoStore";
import RootStore from "./store/RootStore";
import TodoList from "./components/TodoList";
import TodoHeader from "./components/TodoHeader";
import "./App.css";

const root = new RootStore();

function App() {
  console.log({ ...root });
  return (
    <Provider {...root}>
      <div className="todo-wrapper">
        <TodoHeader />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
