import { defineStore } from 'pinia'
const useUtilsDev = defineStore('useUtilsDevId', {
  state: () => {
    return {
      utilsStatus: '0'
    }
  },
  actions: {
    setUtilsStatus(status: string) {
      this.utilsStatus = status
    }
  }
})

export default useUtilsDev
