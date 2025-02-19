import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: () => import('../views/SignUpView.vue'),
    },
    {
      path: '/LogIn',
      name: 'LogIn',
      component: () => import('../views/LogInView.vue'),
    },
    {
      path: '/MenWear',
      name: 'MenWear',
      component: () => import('../views/MenView.vue'),
    },
    {
      path: '/WomanWear',
      name: 'WomanWear',
      component: () => import('../views/WomanView.vue'),
    },
  ],
})

export default router
