import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/LayoutHome.vue'

export const constantRoutes = [
  {
    path: '/login',
    name: 'LoginBime',
    hidden: true,
    meta: {
      title: 'LoginBime'
    },
    component: () => import('@/views/login/LoginBime.vue')
  },
  {
    path: '/',
    meta: {
      title: 'Workbench',
      icon: 'home-fill'
    },
    component: Layout,
    name: 'Workbench',
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'DashboardBox',
        meta: {
          title: 'DashboardBox'
        },
        component: () => import('@/views/workbench/dashboard/DashboardBox.vue')
      },
      {
        path: 'center',
        name: 'CenterBox',
        meta: {
          title: 'CenterBox'
        },
        component: () => import('@/views/workbench/center/CenterBox.vue')
      }
    ]
  }
]

export const dynamicRouter = {
  'views/Empty/EmptyState': () => import('@/views/Empty/EmptyState.vue')
}

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: constantRoutes
})

export default router
