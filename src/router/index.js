import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "AppMain",
    component: () => import("@/views/AppMain"),
  },

  {
    path: "/chat",
    name: "AppChat",
    component: () => import("@/views/AppChat"),
  },

  {
    path: "/member",
    name: "AppMember",
    component: () => import("@/views/AppMember"),
  },

  {
    path: "/post",
    name: "AppPost",
    component: () => import("@/views/AppPost"),
  },

  {
    path: "/product",
    name: "AppProduct",
    component: () => import("@/views/AppProduct"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
