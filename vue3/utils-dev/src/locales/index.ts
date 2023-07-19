import { createI18n } from 'vue-i18n'
import zhCnLocale from './zhCn'
import enLocale from './en'
const messages = {
  zhCn: {
    ...zhCnLocale
  },
  en: {
    ...enLocale
  },
}
// locale 暂未处理
const i18n = createI18n({
  legacy: false,
  locale: 'zhCn',
  fallbackLocale: 'en',
  messages
})

export default i18n
