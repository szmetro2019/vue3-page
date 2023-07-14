import { createI18n } from 'vue-i18n'
import zhCnLocale from './zhCn'
import enLocale from './en'
const messages = {
  zh: {
    ...zhCnLocale
  },
  en: {
    ...enLocale
  }
}

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages
})

export default i18n
