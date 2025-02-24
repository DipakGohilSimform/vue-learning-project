<script setup>
defineProps({
  label: String,
  disabled: Boolean,
  onClick: Function,
});
</script>

<template>
  <button :disabled="disabled" class="btn" @click="onClick">
    {{ label }}
  </button>
</template>

<style scoped>
.btn {
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  background: #42b883;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: #168453;
  }
}

.btn:disabled {
  background-color: gray;
  cursor: not-allowed;
}
</style>
