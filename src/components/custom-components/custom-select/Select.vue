<template>
  <div class="select-wrapper">
    <!-- Selected Value Display -->
    <div class="selected-value" @click="toggleDropdown">
      {{ selectedLabel || placeholder }}
      <span class="arrow">{{ isOpen ? "▲" : "▼" }}</span>
    </div>

    <!-- Dropdown Options -->
    <ul v-if="isOpen" class="dropdown">
      <li
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
        :class="{ selected: option.value === modelValue }"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  options: {
    type: Array,
    required: true,
    default: () => [],
  },
  placeholder: {
    type: String,
    default: "Select an option",
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

const isOpen = ref(false);

// Toggle dropdown visibility
function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

// Select an option
function selectOption(option) {
  emit("update:modelValue", option.value);
  isOpen.value = false;
}

// Get the label of the selected option
const selectedLabel = computed(() => {
  const selectedOption = props.options.find(
    (option) => option.value === props.modelValue
  );
  return selectedOption ? selectedOption.label : "";
});
</script>

<style scoped>
.select-wrapper {
  position: relative;
  width: 200px;
  font-family: Arial, sans-serif;
}

.selected-value {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.arrow {
  font-size: 12px;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 100;
  max-height: 150px;
  overflow-y: auto;
}

.dropdown li {
  padding: 10px;
  cursor: pointer;
}

.dropdown li:hover {
  background-color: #f0f0f0;
}

.dropdown li.selected {
  background-color: #e0e0e0;
}
</style>
