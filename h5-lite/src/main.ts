// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// svg
import 'virtual:svg-icons-register'
import SvgIcon from './components/SvgIcon.vue'
// styles
import './styles/index.scss'

import App from './App.vue'
import router from './router'

async function appCustomMain() {
  const app = createApp(App)
  app.use(createPinia())
  app.use(router)
  app.component('SvgIcon', SvgIcon)
  await app.use(router)
  app.mount('#app')
}

appCustomMain()
