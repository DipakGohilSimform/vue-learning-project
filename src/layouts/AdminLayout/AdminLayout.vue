<template>
  <a-layout>
    <a-layout-sider
      width="220"
      v-model:collapsed="collapsed"
      :trigger="null"
      collapsible
    >
      <Logo class="logo" v-if="!collapsed" />
      <LogoVertical class="logo sm" v-if="collapsed" />
      <a-menu v-model:selectedKeys="selectedKeys" mode="inline">
        <a-menu-item key="1">
          <IconDashboard />
          <span>Dashboard</span>
        </a-menu-item>
        <a-menu-item key="2">
          <IconAnalytics />
          <span>Analytics</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";
import Logo from "@/assets/svgs/Logo.vue";
import LogoVertical from "@/assets/svgs/LogoVertical.vue";
import IconDashboard from "@/assets/svgs/IconDashboard.vue";
import IconAnalytics from "@/assets/svgs/IconAnalytics.vue";
const selectedKeys = ref<string[]>(["1"]);
const collapsed = ref<boolean>(false);
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
.ant-menu-title-content {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
}
</style>
