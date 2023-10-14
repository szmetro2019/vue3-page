<template>
  <el-config-provider :message="config" :locale="locale">
    <section class="nj-wrap nj-wrap--with-sider nj-wrap--with-sider">
      <aside class="nj-wrap__sider">
        <AsideBar></AsideBar>
      </aside>
      <section class="nj-wrap">
        <header class="nj-wrap__header">
          <LayoutHeader></LayoutHeader>
        </header>

        <main class="nj-wrap__content">
          <section class="nj-wrap tdesign-starter-layout">
            <el-scrollbar always class="csj-scrollbar">
              <main class="nj-wrap__content tdesign-starter-content-layout">
                <router-view v-slot="{ Component }">
                  <keep-alive :include="cachedViews">
                    <component :is="Component" :key="key" />
                  </keep-alive>
                </router-view>
              </main>
            </el-scrollbar>
          </section>
        </main>
      </section>
    </section>
  </el-config-provider>
</template>
<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import { useRoute } from 'vue-router'
import AsideBar from '@/layout/sider/SiderBar.vue'
import LayoutHeader from '@/layout/LayoutHeader.vue'
import { elementPlusStore, useMainStore } from '@/store/index'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import 'dayjs/locale/en'
// element-plus and dayjs - locale
const useMain = elementPlusStore()
const reactiveConfig = reactive({
  locale: {
    zhCn: zhCn,
    enUS: en
  } as any,
  dayjs: {
    zhCn: 'zh-cn',
    enUS: 'en'
  } as any
})
const locale: any = ref(reactiveConfig.locale[useMain.locale])
dayjs.locale(reactiveConfig.dayjs[useMain.locale])
watch(
  () => useMain.locale,
  (newLocale) => {
    console.log(newLocale, 'newLocale')
    locale.value = reactiveConfig.locale[newLocale]
    dayjs.locale(reactiveConfig.dayjs[newLocale])
  }
)
// keep-alive
const useMain1 = useMainStore()
const route = useRoute()
let cachedViews: any = ref([])
const key = ref('')
const addTags = () => {
  const { name } = route
  if (name) {
    useMain1.addCachedView(route)
  }
  return false
}
watch(
  () => route.path,
  (newPath) => {
    key.value = newPath
    addTags()
    cachedViews.value = useMain1.cachedViews
  },
  {
    immediate: true
  }
)
// // scrollbar
// const scrollbarRef: any = ref(null)
// watch(
//   () => useMain1.scrollbarFlag,
//   () => {
//     scrollbarRef.value!.setScrollTop(0)
//   }
// )

// message
const config = reactive({
  max: 1
})
</script>
<style scoped lang="scss">
.nj-wrap {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
}

.nj-wrap,
.nj-wrap__direction-vertical {
  display: flex;
  flex: auto;
  flex-direction: column;
  background: #eee;
}
.nj-wrap--with-sider,
.nj-wrap__direction-horizontal {
  flex-direction: row;
}

.nj-wrap__sider {
  position: relative;
  width: 232px;
  background: #fff;
  transition: all 0.2s;
}
.nj-wrap__sider {
  width: fit-content;
}

.nj-wrap.nj-wrap--with-sider > .nj-wrap {
  flex: 1;
  min-width: 760px;
}

.nj-wrap__header {
  height: 56px;
  background-color: #fff;
}

.nj-wrap__content {
  flex: auto;
}

.tdesign-starter-layout {
  overflow-y: auto;
  // scroll;
  height: calc(100vh - 56px);
}

.nj-wrap__footer {
  padding: 24px;
}

.tdesign-starter-footer-layout {
  margin-bottom: 24px;
  padding: 0;
}
.tdesign-starter-content-layout {
  padding: 20px;
}
</style>
