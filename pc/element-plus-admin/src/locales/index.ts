import { createPinia } from 'pinia'
const pinia = createPinia()
import { createI18n } from 'vue-i18n'
import { elementPlusStore } from '@/store'
import zhCnLocale from './zhCn'
import enLocale from './en'

const messages = {
  zhCn: {
    ...zhCnLocale
  },
  enUS: {
    ...enLocale
  },

}
const elementPlusStore1 = elementPlusStore(pinia).locale

const i18n = createI18n({
  legacy: false,
  locale: elementPlusStore1,
  fallbackLocale: 'en',
  messages
})

export default i18n
