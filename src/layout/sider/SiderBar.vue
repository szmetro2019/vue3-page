<template>
  <a-menu
    v-model:selectedKeys="selectedKeys"
    v-model:openKeys="openKeys"
    mode="inline"
    :style="{ height: '100%', borderRight: 0 }"
    @click="handleClick"
  >
    <side-item v-for="(item, index) in routes" :key="index" :item="item" :base-path="item.path" />
  </a-menu>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useInfoStore } from '@/store/index'
import SideItem from './SiderbarItem.vue'
// 全部路由
const useInfo = useInfoStore()
const routes: any = useInfo.routes
// 选中当前选项
const route = useRoute()
const selectedKeysFun = () => {
  // const { meta } = route
  // if (meta.activeMenu) {
  //   return [meta.activeMenu]
  // }
  return [route.path.split('/')[route.path.split('/').length - 1]]
}
const selectedKeys: any = computed({
  get() {
    return selectedKeysFun()
  },
  set() {
    return selectedKeysFun()
  }
})
const openKeysFun = () => {
  let openKeyActive = route.path.split('/').map((item, index) => {
    return item ? (index === 1 ? item : item) : '/'
  })
  return openKeyActive.slice(0, openKeyActive.length - 1)
}
const openKeys: any = computed({
  get() {
    return openKeysFun()
  },
  set() {
    return openKeysFun()
  }
})
// 跳转路由
const router = useRouter()
const handleClick = (event: any) => {
  router.push({
    path: event.keyPath.join('/').replace('//', '/')
  })
}
</script>
