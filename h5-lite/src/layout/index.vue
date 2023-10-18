<template>
  <div class="app-wrapper">
    <!-- <van-config-provider :theme="useDarkMode() ? 'dark' : 'light'"> -->
    <div class="app-wrap">
      <div class="app-section">
        <router-view v-slot="{ Component }">
          <keep-alive :include="cachedViews">
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </div>
    </div>
    <!-- </van-config-provider> -->
  </div>
</template>
<script setup lang="ts">
import { useCachedViewStoreHook } from '@/store/modules/cachedView'
// import { useDarkMode } from '@/hooks/useToggleDarkMode'
import { computed } from 'vue'

const cachedViews = computed(() => {
  return useCachedViewStoreHook().cachedViewList
})
</script>
<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}
.app-wrap {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-block-background);
  .app-section {
    overflow-y: scroll;
    flex: 1;
  }
}
</style>
