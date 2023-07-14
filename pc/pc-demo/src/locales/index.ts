import { createPinia } from 'pinia'
const pinia = createPinia()
import { createI18n } from 'vue-i18n'
import { useInfoStore } from '@/store'
import zhCnLocale from './zhCn'
import enLocale from './en'
const messages = {
  zhCn: {
    ...zhCnLocale
  },
  en: {
    ...enLocale
  }
}
const useInfo = useInfoStore(pinia).locale

const i18n = createI18n({
  legacy: false,
  locale: useInfo,
  fallbackLocale: 'en',
  messages
})

export default i18n
