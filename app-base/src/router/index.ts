import { createRouter, createWebHashHistory } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'AppLayout',
      component: AppLayout,
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'AppHome',
          component: () => import('@/views/AboutView.vue')
        }
      ]
    },
  ]
})

export default router
