<template>
  <div>
    <BaseInputText
      v-bind:value="newTodoText"
      v-on:input="changeNewTodoText($event)"
      @keydown.enter="addNewTodo"
      v-on:ahihi="addNewTodoAsync"
    />
    <ul>
      <TodoListItem
        v-for="todo in todos"
        v-bind:todo="todo"
        v-bind:key="todo.id"
        v-on:remove="deleteTodo($event)"
      />
    </ul>
  </div>
</template>

<script>
import BaseInputText from "./BaseInputText";
import TodoListItem from "./TodoListItem";

let nextTodoId = 1;

export default {
  components: { BaseInputText, TodoListItem },
  computed: {
    newTodoText() {
      return this.$store.getters.newTodoText;
    },
    todos() {
      return this.$store.getters.todos;
    },
  },
  methods: {
    changeNewTodoText(newTodoText) {
      this.$store.commit("changeNewTodoText", newTodoText);
    },
    addNewTodoAsync() {
      this.$store.dispatch("addNewTodoAsync", 3000);
    },
    addNewTodo: function () {
      this.$store.commit("addNewTodo");
    },
    deleteTodo(id) {
      this.$store.commit("deleteTodo", id);
    },
  },
};
</script>