import { createRouter, createWebHashHistory } from 'vue-router'
import LayoutPage from '@/layout/LayoutPage.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LayoutPage',
      component: LayoutPage,
      redirect: '/index',
      children: [
        {
          path: 'index',
          component: () => import('@/views/AboutView.vue')
        }
      ]
    },
  ]
})

export default router
