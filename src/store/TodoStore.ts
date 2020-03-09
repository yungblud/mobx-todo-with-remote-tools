import { observable, action } from "mobx";
import remotedev from "mobx-remotedev";

@remotedev
class TodoStore {
  @observable todos: any[] = [];

  @action addTodo = (todo: string) => {
    this.todos.push({
      id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
      todo,
      checked: false
    });
  };
}

export default TodoStore;
