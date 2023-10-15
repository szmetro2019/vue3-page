<template>
  <div class="app-page">
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
      <p>刷新次数: {{ count }}</p>
      <div
        class="text-[14px] py-[2px] px-[10px] rounded-[4px] bg-[var(--color-block-background)]"
      >
        <h3 class="title">{{ $t("message") }}</h3>
        <p class="my-[14px] leading-[24px] text-[12px]">
          🌱 基于 Vue3 全家桶、TypeScript、Vite 构建工具，开箱即用的 H5
          移动端项目基础模板
        </p>
      </div>

      <div class="demo-main">
        <van-cell v-for="(item, idx) in contentList" :key="idx" :title="item" />
      </div>
    </van-pull-refresh>
  </div>
</template>
<script setup lang="ts" name="Demo">
import { onMounted, ref, reactive } from "vue";
import { showToast } from "vant";

const contentList = reactive([
  "✔ ⚡ Vue3 + Vite4",
  "✔ 🍕 TypeScript",
  "✔ ✨ Vant4 组件库",
  "✔ 🌀 Tailwindcss 原子类框架",
  "✔ 🍍 Pinia 状态管理",
  "✔ 🌓 支持深色模式",
  "✔ Vue-router 4",
  "✔ 支持 SVG 图标自动注册组件",
  "✔ vw 视口适配",
  "✔ Axios 封装",
  "✔ 打包资源 gzip 压缩",
  "✔ 开发环境支持 Mock 数据",
  "✔ ESLint",
  "✔ 首屏加载动画",
  "✔ 开发环境调试面板"
]);

const count = ref(0);
const loading = ref(false);
const onRefresh = () => {
  setTimeout(() => {
    showToast("刷新成功");
    loading.value = false;
    count.value++;
  }, 1000);
};
onMounted(() => {});
</script>
<style scoped lang="less">
.title {
  font-size: 18px;
}
</style>
