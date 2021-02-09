import nextTodoId, { increaseId } from "../nextTodoId";

const state = {
  newTodoText: "",
  todos: [
    { id: increaseId(), text: "abc" },
    { id: increaseId(), text: "def" },
    { id: increaseId(), text: "vuex" }
  ]
};

export default state;
