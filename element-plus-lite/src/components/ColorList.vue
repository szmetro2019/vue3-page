<template>
  <div class="picker-box">
    <el-color-picker v-model="color1" @change="changeTheme" />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { mix } from '@/utils/index'
import { elementPlusStore } from '@/store/index'
const store = elementPlusStore()

const [pre, mixWhite, mixBlack] = ['--el-color-primary', '#ffffff', '#000000']
const color1 = ref(store.color)

const changeTheme = (color = color1.value) => {
  const elColor = document.documentElement
  elColor.style.setProperty(pre, color)
  store.colorInfo(color)
  for (let i = 1; i < 10; i += 1) {
    elColor.style.setProperty(`${pre}-light-${i}`, mix(color, mixWhite, i * 0.1))
  }
  elColor.style.setProperty('--el-color-primary-dark-2', mix(color, mixBlack, 0.1))
}

const setColorFun = () => {
  const elColor = document.documentElement
  elColor.style.setProperty(pre, store.color)
  for (let i = 1; i < 10; i += 1) {
    elColor.style.setProperty(`${pre}-light-${i}`, mix(store.color, mixWhite, i * 0.1))
  }
  elColor.style.setProperty('--el-color-primary-dark-2', mix(store.color, mixBlack, 0.1))
}

onMounted(() => {
  setColorFun()
})
</script>
<style lang="scss" scoped>
.picker-box {
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 100%;
}
</style>
