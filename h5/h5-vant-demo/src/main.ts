import { createApp } from "vue";
import { store } from "./store";
import i18n from "./locales";
// normalize.css
import "normalize.css/normalize.css";
// 全局样式
import "./styles/index.less";
// tailwindcss
import "./styles/tailwind.css";
// svg icon
import "virtual:svg-icons-register";
import router from "./router";

import App from "./App.vue";

async function vueWebCustom() {
  const app = createApp(App);
  app.use(store);
  app.use(i18n);
  await app.use(router);
  app.mount("#app");
}

vueWebCustom();
