import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/LayoutWrap.vue'

export const constantRoutes = [
  {
    path: '/login',
    name: 'LoginBime',
    index: 1,
    hidden: true,
    meta: {
      title: 'Login'
    },
    component: () => import('@/views/login/LoginBime.vue')
  },
  {
    path: '/dashboard',
    index: 10,
    meta: {
      title: 'Dashboard',
      icon: 'Dashboard'
    },
    component: Layout,
    name: 'Dashboard',
    redirect: '/dashboard/index',
    children: [
      {
        path: 'index',
        name: 'DashboardHome',
        meta: {
          title: 'DashboardHome'
        },
        component: () => import('@/views/dashboard/index.vue')
      },

    ]
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/empty/NotFound.vue')
  }
]

export const dynamicRouter = {
  // "layout/Layout": () => import("@/layout/LayoutWrap.vue"),
  // "views/setting/SettingInfo": () => import("@/views/setting/SettingInfo.vue"),
  // "views/vip/VipList": () => import("@/views/vip/VipList.vue"),
  // "views/vip/VipForm": () => import("@/views/vip/VipForm.vue"),
  // "views/Empty/EmptyState": () => import("@/views/Empty/EmptyState.vue"),
}

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: constantRoutes
})

export default router