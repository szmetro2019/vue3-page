import { createApp } from 'vue'
import store from './store/index'
import i18n from './locales'
import router from './router'
// 全局加载
import Prism from 'prismjs';

import './styles/index.scss'

import App from './App.vue'

async function utilsDevAdmin() {
  const app = createApp(App)
  app.use(store)
  app.use(i18n)
  app.component('Prism', Prism)
  await app.use(router)
  app.mount('#app')
}

utilsDevAdmin()