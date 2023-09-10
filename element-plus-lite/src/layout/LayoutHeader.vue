<template>
  <div class="header-flex">
    <div class="header-left"></div>
    <div class="header-right">
      <ColorList />
      <div class="tuichu" @click="loginout">退出</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import ColorList from '@/components/ColorList.vue'
import { useMainStore } from '@/store/index'
const useMainStoreFun = useMainStore()
const loginout = () => {
  useMainStoreFun.setLogout()
}
</script>
<style scoped lang="scss">
@import '@/styles/basic.scss';

.header-flex {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 20px;
  height: 100%;

  .header-left {
    flex: 1;
  }

  .header-right {
    display: flex;
    align-items: center;
    flex: none;
  }
}

.tuichu {
  padding: 0 10px;
  cursor: pointer;
}
</style>
