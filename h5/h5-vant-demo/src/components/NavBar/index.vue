<template>
  <van-nav-bar fixed placeholder>
    <template #right>
      <svg-icon class="text-[18px]" @click="setLocale" name="locale" />
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
import { Locale } from "vant";
import enUS from "vant/es/locale/lang/en-US";

const onClickRight = () => {
  useToggleDarkMode();
};

const setLocale = () => {
  Locale.use("en-US", enUS);
};
</script>
<style scoped></style>
