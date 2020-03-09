import TodoStore from "./TodoStore";
import remotedev from "mobx-remotedev";

// @remotedev
class RootStore {
  todoStore: TodoStore;

  constructor() {
    this.todoStore = remotedev(new TodoStore(this));
  }
}

export default RootStore;
