<template>
  <el-scrollbar style="height: 100vh">
    <el-empty description="404">
      <el-button type="primary" @click="tojulpHome">返回主页</el-button>
    </el-empty>
  </el-scrollbar>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { mix } from '@/utils/index'
import { elementPlusStore } from '@/store/index'
import { getHomepath } from '@/utils/auth'
const store = elementPlusStore()
const router: any = useRouter()
// color
const [pre, mixWhite, mixBlack] = ['--el-color-primary', '#ffffff', '#000000']
const setColorFun = () => {
  const elColor = document.documentElement
  elColor.style.setProperty(pre, store.color)
  for (let i = 1; i < 10; i += 1) {
    elColor.style.setProperty(`${pre}-light-${i}`, mix(store.color, mixWhite, i * 0.1))
  }
  elColor.style.setProperty('--el-color-primary-dark-2', mix(store.color, mixBlack, 0.1))
}
// href
const tojulpHome = () => {
  router.push({ path: getHomepath() || '/login' })
}
onMounted(() => {
  setColorFun()
})
</script>
<style lang="scss" scoped>
.empty-scrollbar {
  flex-direction: column;
  min-height: 360px;
  height: 100vh;
}
</style>
