<template>
  <van-nav-bar fixed placeholder>
    <template #right>
      <LocaleView></LocaleView>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <svg-icon
        class="text-[18px]"
        @click="onClickRight"
        :name="useDarkMode() ? 'light' : 'dark'"
      />
    </template>
  </van-nav-bar>
</template>
<script setup lang="ts">
import { useDarkMode, useToggleDarkMode } from "@/hooks/useToggleDarkMode";
import LocaleView from "@/components/Locale/index.vue";
const onClickRight = () => {
  useToggleDarkMode();
};
</script>
<style scoped></style>
