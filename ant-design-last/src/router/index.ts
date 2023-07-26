import { createRouter, createWebHashHistory } from 'vue-router'
import LayoutPgae from '@/layout/LayoutPage.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/index'
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: 'About'
    },
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/index',
    name: 'Index',
    component: LayoutPgae,
    meta: {
      title: 'Index'
    },
    redirect: '/index/index',
    children: [
      {
        path: 'index',
        name: 'IndexIndex',
        meta: {
          title: 'IndexIndex'
        },
        component: () => import('@/views/AboutView.vue'),
        children: [
          {
            path: 'index',
            name: 'IndexIndex',
            meta: {
              title: 'IndexIndex'
            },
            component: () => import('@/views/AboutView.vue')
          }
        ]
      },

    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
