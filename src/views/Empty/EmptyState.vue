<template>
  <a-button type="primary" @click="tojulpHome">返回主页</a-button>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { getHomepath } from '@/utils/auth'
const router = useRouter()
const tojulpHome = () => {
  router.push({ path: getHomepath() || '/login' })
}
</script>
<style lang="less" scoped></style>
