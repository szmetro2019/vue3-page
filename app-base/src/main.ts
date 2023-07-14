import { createApp } from 'vue'
import router from './router'
import store from './store/index'
// i18n
import i18n from './locales'
// svg-icon
import 'virtual:svg-icons-register'
import SvgIcon from './components/SvgIcon.vue'
// css
import './styles/index.scss'

import App from './App.vue'
const app = createApp(App)

async function appBaseMain() {
  app.component('SvgIcon', SvgIcon)
  app.use(store)
  app.use(i18n)
  await app.use(router)
  app.mount('#app')
}
appBaseMain()