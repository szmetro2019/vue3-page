import { defineStore } from 'pinia'
import {
  getLocale,
  setLocale,
  getColor,
  setColor,
  getIsCollapse,
  setIsCollapse
} from '@/utils/auth'
const elementPlusStore = defineStore('elementPlusPlus', {
  state: () => {
    return {
      locale: getLocale() || 'zhCn',
      color: getColor() || '#1677ff',
      isCollapse: getIsCollapse() || '0' //1收缩0展示
    }
  },
  actions: {
    localeInfo(locale: any) {
      this.locale = locale
      setLocale(locale)
    },
    colorInfo(color: any) {
      this.color = color
      setColor(color)
    },
    isCollapseInfo(isCollapse: any) {
      this.isCollapse = isCollapse
      setIsCollapse(isCollapse)
    }
  }
})

export default elementPlusStore
