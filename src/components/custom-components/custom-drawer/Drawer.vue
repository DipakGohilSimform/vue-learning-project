<template>
  <div>
    <!-- Overlay -->
    <div v-if="isOpen" class="drawer-overlay" @click="closeDrawer"></div>

    <!-- Drawer -->
    <div
      class="drawer"
      :class="[position, { open: isOpen }]"
      :style="{ width: width }"
    >
      <div v-if="isOpen" @click="closeDrawer" class="drawer-close-icon">
        <IconClose />
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import IconClose from "@/assets/svgs/IconClose.vue";

// Props
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  position: {
    type: String,
    default: "left", // 'left', 'right', 'top', 'bottom'
    validator: (value) => ["left", "right", "top", "bottom"].includes(value),
  },
  width: {
    type: String,
    default: "300px",
  },
});

// Emits
const emit = defineEmits(["close"]);

// Close drawer
function closeDrawer() {
  emit("close");
}
</script>

<style scoped>
.drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
}

.drawer {
  position: fixed;
  background-color: white;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 101;
  transition: transform 0.3s ease-in-out;
}

.drawer-close-icon {
  position: absolute;
  right: 20px;
  top: 23px;
  cursor: pointer;
}

.drawer.left {
  top: 0;
  left: 0;
  height: 100%;
  transform: translateX(-100%);
}

.drawer.right {
  top: 0;
  right: 0;
  height: 100%;
  transform: translateX(100%);
}

.drawer.top {
  top: 0;
  left: 0;
  width: 100%;
  transform: translateY(-100%);
}

.drawer.bottom {
  bottom: 0;
  left: 0;
  width: 100%;
  transform: translateY(100%);
}

.drawer.open.left {
  transform: translateX(0);
}

.drawer.open.right {
  transform: translateX(0);
}

.drawer.open.top {
  transform: translateY(0);
}

.drawer.open.bottom {
  transform: translateY(0);
}
</style>
