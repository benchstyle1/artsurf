import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { layout: "MainLayout" },
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/details/:id",
    name: "Details",
    meta: { layout: "MainLayout" },
    component: () => import("../views/Details.vue"),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
