<template>
  <van-nav-bar fixed placeholder>
    <template #right>
      <svg-icon class="text-[18px]" @click="show = true" name="locale" />
      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <svg-icon
        class="text-[18px]"
        @click="onClickRight"
        :name="useDarkMode() ? 'light' : 'dark'"
      />
    </template>
  </van-nav-bar>

  <van-action-sheet
    teleport="body"
    :close-on-click-action="true"
    v-model:show="show"
    :actions="escapeList"
    @select="onSelect"
  />
</template>
<script setup lang="ts">
import { reactive, ref, onMounted } from "vue";
import { useDarkMode, useToggleDarkMode } from "@/hooks/useToggleDarkMode";
import { useLocaleModeStoreHook } from "@/store/modules/localeMode";
import { useI18n } from "vue-i18n";
import { Locale } from "vant";
import dayjs from "dayjs";
import enUS from "vant/es/locale/lang/en-US";
import jaJP from "vant/es/locale/lang/ja-JP";
import ruRU from "vant/es/locale/lang/ru-RU";
import zhCN from "vant/es/locale/lang/zh-CN";
import zhHK from "vant/es/locale/lang/zh-HK";
import "dayjs/locale/zh-cn";
import "dayjs/locale/en";
import "dayjs/locale/ja";
import "dayjs/locale/ru";
import "dayjs/locale/zh-hk";

const escapeList = reactive([
  { value: "enUS", name: "英语" },
  { value: "jaJP", name: "日语" },
  { value: "ruRU", name: "俄罗斯语" },
  { value: "zhCN", name: "简体中文" },
  { value: "zhHK", name: "繁体中文" }
]);
const localeConfig = reactive({
  enUS: { name: "en-US", dayjs: "en", label: "英语", vant: enUS },
  jaJP: { name: "ja-JP", dayjs: "ja", label: "日语", vant: jaJP },
  ruRU: { name: "ru-RU", dayjs: "ru", label: "俄罗斯语", vant: ruRU },
  zhCN: { name: "zh-CN", dayjs: "zh-cn", label: "简体中文", vant: zhCN },
  zhHK: { name: "zh-HK", dayjs: "zh-hk", label: "繁体中文", vant: zhHK }
});

const show = ref(false);

const onClickRight = () => {
  useToggleDarkMode();
};

onMounted(() => {
  setLocaleBg(useLocaleModeStoreHook().localeMode);
});

const onSelect = (item: Object) => {
  setLocaleBg(item.value);
};

const { locale } = useI18n();
const setLocaleBg = (name: string) => {
  let itemVale = localeConfig[name];
  // set vant
  Locale.use(itemVale.name, itemVale.vant);
  // set dayjs
  dayjs.locale(itemVale.dayjs);
  // set vue-i18n
  locale.value = name;
  // session
  useLocaleModeStoreHook().localeInfo(name);
};
</script>
<style scoped></style>
