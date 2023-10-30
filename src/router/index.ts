import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('@/views/Home/DashboardView.vue')
        },
        {
          path: 'outgoing',
          name: 'outgoing',
          component: () => import('@/views/Home/outgoingView.vue')
        }
      ],
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
  ]
})

export default router
