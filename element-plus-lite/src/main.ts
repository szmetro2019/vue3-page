import { createApp } from 'vue'

import router from './router'
import store from './store/index'
import i18n from './locales'
import 'virtual:svg-icons-register'
import SvgIcon from './components/SvgIcon.vue'
import './permission'
import './styles/tailwind.css'
import './styles/index.scss'
// loading
import { setupGlobDirectives } from './directive/index'

import App from './App.vue'

async function vue3Admin() {
  const app = createApp(App)
  app.component('SvgIcon', SvgIcon)
  app.use(store)
  app.use(i18n)
  await app.use(router)
  // 注册全局指令
  setupGlobDirectives(app)
  app.mount('#app')
}

vue3Admin()