import router from './router'
import { getToken, setHomepath } from '@/utils/auth'
import { useMainStore } from './store/index'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
NProgress.configure({ showSpinner: false }) // NProgress Configuration
import i18n from '@/locales/index'
const whiteList = ['/login']

export function getFirstRouter(router: any, arr: any = []) {
  for (let i = 0; i < router.length; i++) {
    if (!router[i].hidden) {
      arr.push(router[i].path)
      if (router[i].children && router[i].children.length > 0) {
        getFirstRouter(router[i].children, arr)
      }
      break
    }
  }
  return arr
}

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  const { t } = i18n.global
  if (to.meta.title) {
    document.title = t('route.' + to.meta.title) + '-vue3'
  }
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      const userStore = useMainStore()
      // 获取动态权限菜单
      const hasRoles = userStore.routes && userStore.routes.length > 0
      if (hasRoles) {
        next()
      } else {
        try {
          const accessedRoutes: any = await userStore.addRouter()
          const newArr = getFirstRouter(accessedRoutes, [])
          const newArrPrth = newArr.join('/')
          let result = ''
          result = newArr[0] === '/' ? newArrPrth.slice(1) : newArrPrth
          setHomepath(result)
          if (to.matched.length == 0) {
            accessedRoutes.forEach((element: any) => {
              router.addRoute(element)
            })
          }
          if (to.path === '/') {
            next({ path: result })
          } else {
            next({
              ...to,
              replace: true
            })
          }
        } catch (error) {
          NProgress.done()
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
