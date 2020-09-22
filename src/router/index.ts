import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import { useStore } from "@/store";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/posts/new",
    name: "NewPost",
    component: () => import("../views/NewPost.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/posts/:id",
    name: "ShowPost",
    component: () => import("../views/ShowPost.vue"),
  },
  {
    path: "/posts/:id/edit",
    name: "EditPost",
    component: () => import("../views/EditPost.vue"),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const store = useStore();
  if (to.meta.requiresAuth && !store.getState().loginUser.currentUserId) {
    next({ name: "Home" });
  } else {
    next();
  }
});

export default router;
