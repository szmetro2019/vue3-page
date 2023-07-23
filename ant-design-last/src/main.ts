
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import i18n from './locales'
import './styles/index.less'

import App from './App.vue'

async function antDesignLiteFun() {
  const app = createApp(App)
  app.use(i18n)
  app.use(createPinia())
  await app.use(router)
  app.mount('#app')
}

antDesignLiteFun()