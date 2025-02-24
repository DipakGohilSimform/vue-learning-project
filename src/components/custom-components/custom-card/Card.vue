<template>
  <div class="message-card">
    <h3>{{ title }}</h3>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    message: String,
  },
};
</script>

<style scoped>
.message-card {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  width: 200px;
  background: #f9f9f9;
}
</style>
