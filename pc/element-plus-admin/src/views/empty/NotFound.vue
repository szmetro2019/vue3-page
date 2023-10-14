<template>
  <el-scrollbar height="100vh">
    <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div class="text-center">
        <p class="text-base font-semibold text-indigo-600">404</p>
        <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        <p class="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a
            @click="tojulpHome"
            href="javascript:void(0);"
            class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >Go back home</a
          >
          <a href="javascript:void(0);" class="text-sm font-semibold text-gray-900"
            >Contact support <span aria-hidden="true">&rarr;</span></a
          >
        </div>
      </div>
    </main>
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
onMounted(() => {
  setColorFun()
})
const tojulpHome = () => {
  router.push({
    path: getHomepath() || '/login'
  })
}
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>
