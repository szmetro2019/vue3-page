<template>
  <el-scrollbar height="100vh" always :min-size="50">
    <a-config-provider :locale="locale">
      <a-layout style="min-height: 100vh">
        <a-layout-header class="header"> header </a-layout-header>
        <a-layout>
          <a-layout-sider width="256" style="background: #fff">
            <SiderBar></SiderBar>
          </a-layout-sider>
          <a-layout style="padding: 24px">
            <a-layout-content
              :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
            >
              <router-view />
            </a-layout-content>
          </a-layout>
        </a-layout>
      </a-layout>
    </a-config-provider>
  </el-scrollbar>
</template>
<script setup lang="ts">
import { watch, ref, reactive } from 'vue'
import enUS from 'ant-design-vue/es/locale/en_US'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import { useInfoStore } from '@/store/index'
import SiderBar from './sider/SiderBar.vue'

const useInfo = useInfoStore()
const localeConfig: any = reactive({
  locale: {
    zhCn: zhCN,
    en: enUS
  }
})
const locale: any = ref(localeConfig.locale[useInfo.locale])
watch(
  () => useInfo.locale,
  (newLocale) => {
    locale.value = localeConfig.locale[newLocale]
  }
)
</script>
