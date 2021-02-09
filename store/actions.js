const actions = {
  addNewTodoAsync: ({ commit }, delay) => {
    setTimeout(() => {
      commit("addNewTodo");
    }, delay);
  }
};

export default actions;
