<template>
  <el-scrollbar height="100vh" always :min-size="50">
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
  </el-scrollbar>
</template>
<script setup lang="ts">
import SiderBar from './sider/SiderBar.vue'
</script>
