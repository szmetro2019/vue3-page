<template>
  <div class="language-box">
    <a-dropdown>
      <a class="ant-dropdown-link" @click.prevent>
        <div>{{ localeVal }}</div>
      </a>
      <template #overlay>
        <a-menu @click="onClick">
          <a-menu-item key="zhCn">
            <span>简体中文</span>
          </a-menu-item>
          <a-menu-item key="enUS">
            <span>美国英语</span>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { elementPlusStore } from '@/store/index'

const elementPlus = elementPlusStore()
const { locale } = useI18n()
const localObj: any = reactive({
  zhCn: '简体中文',
  enUS: '美国英语'
})
const localeVal: any = ref(localObj[elementPlus.locale])

const onClick: MenuProps['onClick'] = ({ key }) => {
  elementPlus.localeInfo(key)
  localeVal.value = localObj[key]
  locale.value = key
}
</script>
<style scoped lang="scss">
.language-box {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  font-size: 14px;

  .language-item {
    display: flex;
    align-items: center;
    padding: 0 10px;
  }
}
</style>
