<template>
  <div>
    <input type="text" :value="value" class="input" v-on="listeners" />
    <button v-on:click="$emit('ahihi')">Click de</button>
  </div>
</template>
<script>
export default {
  props: ["value"],
  computed: {
    listeners() {
      return {
        // Pass all component listeners directly to input
        ...this.$listeners,
        // Override input listener to work with v-model
        input: (event) => this.$emit("input", event.target.value),
      };
    },
  },
};
</script>