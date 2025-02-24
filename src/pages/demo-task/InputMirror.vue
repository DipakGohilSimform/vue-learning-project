<script setup>
import { ref } from "vue";

const inputText = ref("");
</script>

<template>
  <div class="input-mirror">
    <h2>Input Mirror</h2>
    <input v-model="inputText" placeholder="Type something..." />
    <p>
      You typed: <strong>{{ inputText }}</strong>
    </p>
  </div>
</template>

<style scoped>
.input-mirror {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #1a1a1a;
}

input {
  margin-top: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline-color: #42b883;
}

h2 {
  color: white;
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: bold;
}

p {
  margin-top: 10px;
  font-size: 18px;
  color: white;
  margin-bottom: 20px;
}
</style>
