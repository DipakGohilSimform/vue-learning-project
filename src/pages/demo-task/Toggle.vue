<script setup>
import { ref } from "vue";

const isVisible = ref(false);
</script>

<template>
  <div class="toggle-container">
    <h2>Toggle Demo</h2>
    <button @click="isVisible = !isVisible">
      {{ isVisible ? "Hide Text" : "Show Text" }}
    </button>
    <p v-if="isVisible">This is some toggled content!</p>
  </div>
</template>

<style scoped>
.toggle-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1a1a1a;
  height: 100vh;
  font-family: Arial, sans-serif;
}
h2 {
  color: white;
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: bold;
}

button {
  display: inline-block;
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  background: #42b883;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #168453;
  }
}

p {
  margin-top: 10px;
  font-size: 18px;
  color: #ffffff;
}
</style>
