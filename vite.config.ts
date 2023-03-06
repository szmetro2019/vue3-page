import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver, AntDesignVueResolver } from "unplugin-vue-components/resolvers";

import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";

import path from "path";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@nm": fileURLToPath(new URL("./node_modules", import.meta.url)),
      "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
        AntDesignVueResolver(),
        IconsResolver({
          prefix: "Icon",
        }),
      ],
    }),
    Components({
      resolvers: [
        ElementPlusResolver({}),
        AntDesignVueResolver(),
        IconsResolver({
          enabledCollections: ["ant-design"],
        }),
      ],
    }),
    Icons({
      autoInstall: true,
    }),
    // svg
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/icons")],
      symbolId: "icon-[dir]-[name]",
      inject: "body-last",
      customDomId: "__svg__icons__dom__",
    }),
    //gzip
    viteCompression(),
  ],
  server: {
    port: 3715,
    open: true,
    proxy: {
      "/max": {
        target: "",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/max/, ""),
      },
    },
  }
});
