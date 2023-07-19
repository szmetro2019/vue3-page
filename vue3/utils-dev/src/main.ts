import { createApp } from 'vue'
import store from './store/index'
import i18n from './locales'
import './styles/index.scss'

import App from './App.vue'
import router from './router'

async function utilsDevAdmin() {
  const app = createApp(App)
  app.use(store)
  app.use(i18n)
  await app.use(router)
  app.mount('#app')
}

utilsDevAdmin()