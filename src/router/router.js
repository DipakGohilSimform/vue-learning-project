import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import AboutPage from "./components/AboutPage.vue";
import UserPage from "./components/UserPage.vue";

const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/about", name: "About", component: AboutPage },
  { path: "/:pathMatch(.*)*", redirect: "/" }, // Redirect unknown paths to Home
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
