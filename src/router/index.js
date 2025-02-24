import { createRouter, createWebHistory } from "vue-router";
import AdminLayout from "../layouts/AdminLayout/AdminLayout.vue";

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
      {
        path: "/components",
        name: "Components",
        component: () => import("../pages/dashboard/Components.vue"),
      },
      {
        path: "/to-do",
        name: "ToDo App",
        component: () => import("../pages/dashboard/ToDo.vue"),
      },
    ],
  },
  // {
  //   path: "/",
  //   name: "Login",
  //   component: () => import("../pages/auth/Login.vue"),
  // },
  {
    path: "/",
    name: "Documentation",
    component: () => import("../pages/Documentation.vue"),
  },
  {
    path: "/counter-demo",
    name: "Counter Demo",
    component: () => import("../pages/demo-task/Counter.vue"),
  },
  {
    path: "/toggle-demo",
    name: "Toggle Demo",
    component: () => import("../pages/demo-task/Toggle.vue"),
  },
  {
    path: "/input-mirror-demo",
    name: "Input Mirror Demo",
    component: () => import("../pages/demo-task/InputMirror.vue"),
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: () => import("../pages/auth/SignUp.vue"),
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
