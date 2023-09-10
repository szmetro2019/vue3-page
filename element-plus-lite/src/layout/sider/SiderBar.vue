<template>
  <!-- 这里的div是个动态增减的过程 -->
  <div class="tdesign-starter-sidebar-layout">
    <div
      :class="{
        'tdesign-starter-side-nav-placeholder-hidden': isCollapse === '1'
      }"
      class="t-default-menu tdesign-starter-side-nav"
    >
      <el-scrollbar style="height: 100%">
        <el-menu
          :default-active="selectedKeys"
          @select="selectFun"
          :collapse="isCollapse === '1' ? true : false"
        >
          <side-item
            v-for="(item, index) in routes"
            :key="index"
            :item="item"
            :base-path="item.path"
          />
        </el-menu>
      </el-scrollbar>
    </div>
    <div
      :class="{
        'tdesign-starter-side-nav-placeholder': isCollapse !== '1',
        'tdesign-starter-side-nav-placeholder-hidden': isCollapse === '1'
      }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useMainStore, elementPlusStore } from '@/store/index'
import SideItem from './SiderbarItem.vue'

// 全局变量
const store = useMainStore()
const route = useRoute()
const selectedKeys = computed(() => {
  const { meta } = route
  if (meta.activeMenu) {
    return meta.activeMenu
  }
  return route.path
})
const routes: any = store.routes

const isCollapseInfo = elementPlusStore()
const isCollapse: any = ref(isCollapseInfo.isCollapse)
const isCollapseFun = () => {
  isCollapse.value = isCollapse.value === '1' ? '0' : '1'
  isCollapseInfo.isCollapseInfo(isCollapse.value)
}

const router = useRouter()
const selectFun = (event: any) => {
  router.push({
    path: event
  })
}
</script>
<style scoped lang="scss">
.tdesign-starter-sidebar-layout {
  height: 100%;
}

.t-default-menu {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  // width: 232px;
  list-style: none;
  white-space: nowrap;
  transition: width 0.32s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.tdesign-starter-side-nav {
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 200;
  min-height: 100%;
  transition: all 0.32s;
}

.tdesign-starter-side-nav-placeholder {
  flex: 1 1 232px;
  min-width: 232px;
  transition: all 0.32s;
}
.tdesign-starter-side-nav-placeholder-hidden {
  flex: 1 1 72px;
  min-width: 72px;
  transition: all 0.32s;
}

:deep(.el-menu) {
  width: 232px;
  border-right: none;
  background-color: transparent;
}
:deep(.el-menu--collapse) {
  width: 70px;
}
</style>
