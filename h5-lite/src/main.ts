import { createApp } from 'vue'
import { store } from './store'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import i18n from './locales'
// svg
import 'virtual:svg-icons-register'
import SvgIcon from './components/SvgIcon.vue'
// styles
import './styles/index.scss'

import App from './App.vue'
import router from './router'

async function appCustomMain() {
  const app = createApp(App)
  app.use(store)
  app.component('SvgIcon', SvgIcon)
  const pinia = createPinia()
  pinia.use(piniaPluginPersistedstate)
  app.use(i18n)
  await app.use(router)
  app.mount('#app')
}

appCustomMain()
