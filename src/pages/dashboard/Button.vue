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
  padding: 8px 16px;
  background-color: gray;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn:disabled {
  background-color: gray;
  cursor: not-allowed;
}
</style>
