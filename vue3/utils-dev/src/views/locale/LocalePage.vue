<template>
  <div>
    <pre><code class="language-js">{{ JsonData }}</code></pre>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const JsonData = ref(`
// npm
npm install vue-i18n@9
npm install --save-dev @intlify/unplugin-vue-i18n

//view
<div>{{ t('theme') }}</div>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

// 切换多语言
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
locale.value = 'en' || 'ja' || '其他'

// vite.config.ts
import { fileURLToPath } from 'node:url'
import { resolve, dirname } from 'node:path'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
export default defineConfig({
  plugins: [
    VueI18nPlugin({
      // locale messages resource pre-compile option
      include: resolve(dirname(fileURLToPath(import.meta.url)), './src/locales/locale/**'),
    }),
  ],
})

// tsconfig.node.json
{
  "compilerOptions": {
    "types": ["@intlify/unplugin-vue-i18n/messages"]
  }
}

// main.ts
import i18n from './locales'
app.use(i18n)

// 文件目录
./src/locales
`)
onMounted(() => {
  Prism.highlightAll()
})
</script>
<style></style>
