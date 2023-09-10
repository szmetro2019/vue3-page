import { defineStore } from 'pinia'
const storageStore = defineStore('storage', {
  state: () => {
    return {
      infoOnj: {
        ZFB_yun_dong: {
          time: '',
          value: '0'
        },
        ZFB_ma_yi_sen_lin: {
          time: '',
          value: '0'
        },
        ZFB_ba_ba_nong_chang: {
          time: '',
          value: '0'
        },
        ZFB_ma_yi_xin_cun: {
          time: '',
          value: '0'
        },
        ZFB_shen_qi_hai_yang: {
          time: '',
          value: '0'
        },
        ZFB_ma_yi_zhaung_yuan: {
          time: '',
          value: '0'
        },
        ZFB_mei_ri_qian_dao: {
          time: '',
          value: '0'
        }
      }
    }
  },
  actions: {}
})

export default storageStore
