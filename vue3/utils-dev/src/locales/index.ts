import { createI18n } from 'vue-i18n'
// import messages from '@intlify/unplugin-vue-i18n/messages'
import zhCnLocale from './locale/zhCn'
import enLocale from './locale/en'

const messagesConst = {
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
  allowComposition: true,
  fallbackLocale: 'en',
  messages: {
    ...messagesConst
  }
})

export default i18n
