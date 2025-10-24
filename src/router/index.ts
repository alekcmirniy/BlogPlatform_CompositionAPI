import { useSessionIsActiveChecking } from '@/composables/useCheckSessionStatus'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import NewsView from '@/views/NewsView.vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: "/", name: "home", component: HomeView },
  { path: "/login", name: "login", component: LoginView },
  { path: "/news", name: "news", component: NewsView }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

const { checkSessionStatus } = useSessionIsActiveChecking();

router.beforeEach((to, _, next) => {
  if (to.name !== "login" && checkSessionStatus() === "unauthorized") {
    next("/login");
  }
  next();
});

export default router;