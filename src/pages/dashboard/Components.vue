<template>
  <div class="components-wrapper">
    <Button type="primary">Click Me</Button>
    <Card title="Hello!" message="This is a simple Vue component." />
    <Button type="primary" @click="toggleDrawer">Open Drawer</Button>
    <Drawer
      :isOpen="isDrawerOpen"
      @close="closeDrawer"
      position="right"
      width="300px"
    >
      <h2>Drawer Content</h2>
      <p>This is a custom drawer component in Vue 3!</p>
    </Drawer>
    <Select
      v-model="selectedValue"
      :options="options"
      placeholder="Choose a fruit"
    ></Select>
  </div>
</template>

<script setup>
import Button from "@/components/custom-components/custom-button/Button.vue";
import Card from "@/components/custom-components/custom-card/Card.vue";
import Drawer from "@/components/custom-components/custom-drawer/Drawer.vue";
import Select from "@/components/custom-components/custom-select/Select.vue";
import { ref } from "vue";

const isDrawerOpen = ref(false);

function toggleDrawer() {
  isDrawerOpen.value = !isDrawerOpen.value;
}

function closeDrawer() {
  isDrawerOpen.value = false;
}

const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "orange", label: "Orange" },
  { value: "grape", label: "Grape" },
];
</script>

<style scoped>
.components-wrapper {
  display: flex;
  gap: 24px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
