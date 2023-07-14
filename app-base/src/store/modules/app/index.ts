import { defineStore } from 'pinia'

const useAppStore = defineStore('useAppStore', {
  state: () => {
    return {
      theme: 'light',
    }
  },
  actions: {
    setTheme(theme: string) {
      this.theme = theme
    }
  }
})

export default useAppStore
