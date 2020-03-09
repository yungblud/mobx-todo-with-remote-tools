import { observable, action } from "mobx";
// import remotedev from "mobx-remotedev";
import RootStore from "./RootStore";

// @remotedev
class TodoStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable todos: any[] = [];

  @action addTodo = (todo: string) => {
    this.todos.push({
      id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
      todo,
      checked: false
    });
  };

  @action.bound
  setChecked(id: number) {
    this.todos = this.todos.map(todo => ({
      ...todo,
      checked: id === todo.id ? !todo.checked : todo.checked
    }));
  }
}

export default TodoStore;
