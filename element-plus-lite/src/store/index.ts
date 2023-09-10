import { createPinia } from 'pinia'
const pinia = createPinia()
import useMainStore from './modules/aaa/index'
import tagviewStore from './modules/tagview/index'
import elementPlusStore from './modules/element/index'
import storageStore from './modules/storage/index'
export { useMainStore, tagviewStore, elementPlusStore, storageStore }
export default pinia
