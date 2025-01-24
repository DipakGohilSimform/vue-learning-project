<template>
  <div id="app">
    <ConfigProvider :theme="themeTokens">
      <router-view />
    </ConfigProvider>
  </div>
</template>

<script>
import { themeTokens } from "./styles/antd-config/antvConfig";

export default {
  name: "App",
  data() {
    return {
      themeTokens,
    };
  },
};
</script>
