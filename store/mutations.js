import nextTodoId, { increaseId } from "../nextTodoId";

const mutations = {
  addNewTodo(state) {
    if (state.newTodoText.length > 0) {
      state.todos.push({ id: increaseId(), text: state.newTodoText });
      state.newTodoText = "";
    }
  },
  deleteTodo(state, id) {
    this.state.todos = this.state.todos.filter((todo) => todo.id != id);
  },
  changeNewTodoText(state, text) {
    state.newTodoText = text;
  }
};

export default mutations;
