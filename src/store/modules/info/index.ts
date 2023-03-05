import { defineStore } from 'pinia'
import { constantRoutes, dynamicRouter } from '@/router/index'
import { setToken, removeToken, getLocale, setLocale } from '@/utils/auth'
import { dynamic_router_list } from '@/assets/router'

// 递归路由,获取完整的路由
export function generateAsyncRouter(routerMap: any, serverRouterMap: any) {
  serverRouterMap.forEach(function (item: any) {
    item.component = routerMap[item.component]
    if (item.children && item.children.length > 0) {
      generateAsyncRouter(routerMap, item.children)
    }
  })
  return serverRouterMap
}

const useInfoStore = defineStore('info', {
  state: () => {
    return {
      login: '',
      routes: [] as any,
      locale: getLocale() || "zhCn",
    }
  },
  actions: {
    // locale
    localeInfo(locale: any) {
      this.locale = locale;
      setLocale(locale);
    },
    // router
    addRouter() {
      return new Promise((resolve) => {
        const accessedRoutes = generateAsyncRouter(dynamicRouter, dynamic_router_list)
        const routerFilter = [...constantRoutes, ...accessedRoutes]
        this.routes = routerFilter
        resolve(routerFilter)
      })
    },
    // login
    setLogin(login: any) {
      return new Promise((resolve, reject) => {
        if (login) {
          setToken(login)
          this.login = login
          resolve(login)
        } else {
          reject('error')
        }
      })
    },
    setLogout() {
      removeToken()
      setTimeout(() => {
        location.reload()
      }, 50)
    },
  }
})

export default useInfoStore
