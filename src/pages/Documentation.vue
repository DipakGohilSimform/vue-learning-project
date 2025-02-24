<script setup>
import { ref } from "vue";
import Button from "./dashboard/Button.vue";

defineProps({
  title: {
    type: String,
    default: "Vue Learning",
  },
});

const count = ref(0);
const increment = () => count.value++;
const decrement = () => count.value--;
</script>

<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <h2>Count: {{ count }}</h2>
    <div class="btn-wrapper">
      <Button label="Decrement" :onClick="decrement" />
      <Button label="Increment" :onClick="increment" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;
  .btn-wrapper {
    display: flex;
    gap: 5px;
  }
}
</style>
