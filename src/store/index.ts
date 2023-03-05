import { createPinia } from 'pinia'
const pinia = createPinia()

import useInfoStore from './modules/info/index'

export { useInfoStore }
export default pinia
