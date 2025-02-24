<template>
  <button :class="type" :disabled="disabled" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "primary",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["click"]);

function handleClick() {
  if (!props.disabled) {
    emit("click"); // Emits the event when button is clicked
  }
}
</script>

<style scoped>
button {
  padding: 14px;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  line-height: 21px;
  box-shadow: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}
.primary {
  background: var(--clr-primary);
  color: white;
}
.primary:hover {
  opacity: 0.9;
  background-color: var(--clr-primary);
}
.secondary {
  background: #f0f0f0;
  color: #000;
}
button:disabled {
  background: #ccc;
  cursor: not-allowed;
}
</style>
