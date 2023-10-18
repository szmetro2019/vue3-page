import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'
import HomeView from '@/pages/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'root',
    component: Layout,
    redirect: 'index',
    children: [
      {
        path: 'index',
        name: 'Index',
        component: HomeView,
        meta: {
          title: '主页'
        }
      }
    ]
  }
]

export default routes
