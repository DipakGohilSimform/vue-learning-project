import { createRouter, createWebHistory } from "vue-router";
import AdminLayout from "../layouts/AdminLayout/AdminLayout.vue";
import AuthLayout from "../layouts/auth-layout/AuthLayout.vue";

const routes = [
  {
    path: "/dashboard",
    component: AdminLayout,
    children: [
      {
        path: "",
        name: "Dashboard",
        component: () => import("../pages/dashboard/Dashboard.vue"),
      },
    ],
  },
  {
    path: "/",
    name: "Login",
    component: () => import("../pages/auth/Login.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../pages/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
