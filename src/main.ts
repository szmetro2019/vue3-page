import { createApp } from 'vue'

import store from './store/index'
import i18n from './locales'
import router from './router'
import 'virtual:svg-icons-register'
import SvgIcon from './components/SvgIcon.vue'
import { setupGlobDirectives } from '@/directives'
import './permission'
import './styles/index.less'

import App from './App.vue'

async function antDesignAsync() {
  const app = createApp(App)

  app.component('SvgIcon', SvgIcon)
  app.use(store)
  app.use(i18n)
  await app.use(router)
  // 注册全局指令
  setupGlobDirectives(app)
  app.mount('#app')
}

antDesignAsync()
