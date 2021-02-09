<template>
  <div>
    {{ todo.id }}
    {{ todo.text }}
    <button v-on:click="$emit('remove', todo.id)">X</button>
  </div>
</template>
<script>
export default {
  props: ["todo"],
};
</script>