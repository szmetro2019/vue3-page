<template>
  <div class="app-wrapper">
    <van-config-provider :theme="useDarkMode() ? 'dark' : 'light'">
      <div class="app-wrap">
        <nav-bar />
        <div class="app-section">
          <router-view v-slot="{ Component }">
            <keep-alive :include="cachedViews">
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </div>
        <tabbar />
      </div>
    </van-config-provider>
  </div>
</template>
<script setup lang="ts">
import tabbar from "@/components/Tabbar/index.vue";
import NavBar from "@/components/NavBar/index.vue";
import { useCachedViewStoreHook } from "@/store/modules/cachedView";
import { useDarkMode } from "@/hooks/useToggleDarkMode";
import { computed } from "vue";

const cachedViews = computed(() => {
  return useCachedViewStoreHook().cachedViewList;
});
</script>
<style lang="less" scoped>
@import "@/styles/mixin.less";
@import "@/styles/variables.less";

.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;

  .clearfix();
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
