import { createPinia } from 'pinia'
const pinia = createPinia()
import useMainStore from './modules/app/index'
export { useMainStore }
export default pinia
