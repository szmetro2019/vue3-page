<template>
  <a-layout>
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <!-- <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1">
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <span>nav 3</span>
        </a-menu-item>
      </a-menu> -->
      <a-menu
        id="dddddd"
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        mode="inline"
        :items="reactiveConfig.items"
        @click="handleClick"
      ></a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <span v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)"> 开 </span>
        <span v-else class="trigger" @click="() => (collapsed = !collapsed)">关</span>
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <RouterView />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { reactive, ref, watch, onMounted, computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { routes } from '@/router/index'
const { t } = useI18n() // use as global scope
const route = useRoute()

const collapsed = ref<boolean>(false)

const openKeys = computed(() => {
  const { meta } = route
  let nowArr = [] as any
  nowArr.push(meta.activeMenu ? meta.activeMenu : route.path)
  const regex = /^\/\w+/
  const results = nowArr.map((url: any) => url.match(regex)[0])
  let newResul: any = []
  newResul.push(results[0])
  console.log(newResul, 'openKeys')
  return newResul
})
const selectedKeys = computed(() => {
  const { meta } = route
  let nowArr: any = []
  nowArr.push(meta.activeMenu ? meta.activeMenu : route.path)
  console.log(nowArr, 'nowArr')
  return nowArr
})

const reactiveConfig = reactive({
  items: [] as any
})

const filterHidden = (paths: any, arr: any) => {
  let arrNew = [] as any
  arr.forEach((item: any) => {
    if ((item.meta && !item.meta.hidden) || item.component) {
      if (item.children && item.children.length > 0) {
        arrNew.push({
          key: paths + (paths ? '/' : '') + item.path,
          label: item.meta && t(`route.${item.meta.title}`) + item.path,
          title: item.meta && t(`route.${item.meta.title}`) + item.path,
          children: filterHidden(item.path, item.children)
        })
      } else {
        arrNew.push({
          key: paths + (paths ? '/' : '') + item.path,
          label: item.meta && t(`route.${item.meta.title}`) + item.path,
          title: item.meta && t(`route.${item.meta.title}`) + item.path
        })
      }
    }
  })
  console.log(arrNew)
  return arrNew
}

onMounted(() => {
  const filteredData = filterHidden('', routes)
  reactiveConfig.items = filteredData
})

const handleClick: MenuProps['onClick'] = (e) => {
  console.log('click', e)
}

watch(openKeys, (val) => {
  console.log('openKeys', val)
})
</script>
<style scoped>
#components-layout-demo-custom-trigger .trigger {
  padding: 0 24px;
  font-size: 18px;
  line-height: 64px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  margin: 16px;
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
