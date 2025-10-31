import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import PostsView from '@/views/PostsView.vue'
import RepeaterView from '@/views/RepeaterView.vue'
import DirectoryView from '@/views/DirectoryView.vue'

const routes: RouteRecordRaw[] = [
  { path: "/", name: "Главная", component: HomeView },
  { path: "/login", name: "Вход", component: LoginView },
  { path: "/posts", name: "Публикации", component: PostsView },
  { path: "/repeater", name: "Repeater", component: RepeaterView },
  { path: "/directory", name: "DirectoryClasses", component: DirectoryView }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

const isUserAuthorized = () => (Boolean(localStorage.getItem("isAuthorized")) ?? false);

router.beforeEach((to, _, next) => {
  if (to.name !== "login" && !isUserAuthorized()) {
    next("/login");
  }
  else
    next();
});

export default router;