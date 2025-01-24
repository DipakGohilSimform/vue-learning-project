import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import Antd from "ant-design-vue";
import "./styles/styles.scss";
import { ConfigProvider } from "ant-design-vue";

const app = createApp(App);

app.use(router);
app.use(Antd);
app.component("ConfigProvider", ConfigProvider);
app.mount("#app");
