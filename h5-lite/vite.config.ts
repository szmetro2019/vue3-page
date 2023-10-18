import { fileURLToPath, URL } from 'node:url'

// import { defineConfig } from 'vite'
import { loadEnv } from "vite";
import type { ConfigEnv, UserConfig } from "vite";
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// legacy
// import legacy from "@vitejs/plugin-legacy";
// gzip
import viteCompression from "vite-plugin-compression";
// svg
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
// icon
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
// pligun
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
// 当前工作目录路径
const root: string = process.cwd();
// https://vitejs.dev/config/

export default ({ mode }: ConfigEnv): UserConfig => {
  // export default defineConfig(({ mode }) => {
  console.log(root);
  // 环境变量
  const env = loadEnv(mode, root, "");
  return {
    base: env.VITE_PUBLIC_PATH || "/",
    plugins: [
      vue(),
      vueJsx(),

      // legacy({
      //   targets: ["defaults", "not IE 11"]
      // }),

      AutoImport({
        resolvers: [
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
      }),
      Components({
        resolvers: [
          IconsResolver({
            enabledCollections: ["openmoji"],
          }),
        ],
      }),
      Icons({
        autoInstall: true,
      }),

      viteCompression(),

      createSvgIconsPlugin({
        iconDirs: [path.resolve(root, 'src/icons')],
        symbolId: 'icon-[dir]-[name]',
        inject: 'body-last',
        customDomId: '__svg__icons__dom__',
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      port: 4567,
      open: true,
      host: true,
    },
    build: {
      rollupOptions: {
        output: {
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]"
        }
      }
    }
  }
}
