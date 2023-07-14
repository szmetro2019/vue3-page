import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// px --> vw vh
import pxtoviewport from 'postcss-px-to-viewport'
// gzip
import viteCompression from 'vite-plugin-compression'
// svg-icon
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [
        pxtoviewport({
          unitToConvert: 'px', // 需要转换的单位，默认px
          viewportWidth: 375, // 设计稿的视口宽度
          unitPrecision: 3, // 单位转换后保留的精度
          minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换 
          mediaQuery: true
        })
      ]
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    viteCompression({
      verbose: true,
      threshold: 1024,
      algorithm: 'gzip'
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/icons')],
      symbolId: 'icon-[dir]-[name]',
      inject: 'body-last',
      customDomId: '__svg__icons__dom__'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    open: true,
    port: 2024
  }
})
