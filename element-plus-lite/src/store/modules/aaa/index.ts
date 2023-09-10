import { defineStore } from 'pinia'
// import Cookies from 'js-cookie'
import { constantRoutes, dynamicRouter } from '@/router/index'
import { setToken, removeToken } from '@/utils/auth'
// import { getInfo } from "@/api/user";
import { dynamic_router_list } from '@/assets/router'
// import { customGbOrderBy } from '@/utils/index'

// 递归路由,获取完整的路由对象
export function generateAsyncRouter(routerMap: any, serverRouterMap: any) {
  serverRouterMap.forEach(function (item: any) {
    item.component = routerMap[item.component]
    if (item.children && item.children.length > 0) {
      generateAsyncRouter(routerMap, item.children)
    }
  })
  return serverRouterMap
}
const useMainStore = defineStore('aaa', {
  state: () => {
    return {
      // 登录
      login: '',
      // 侧边栏控制
      sideCollapse: false,
      // 页面级别loading控制
      loading: false,
      // 左侧菜单栏动态控制
      routes: [] as any,
      // locales: Cookies.get('locales') || 'zhCn',
      cachedViews: [] as any,
      // 根据路由全下
      fisrtPage: '',
      //
      scrollbarFlag: false
    }
  },
  actions: {
    setScrollbar(flag: boolean) {
      this.scrollbarFlag = flag
    },
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
    // setLocales(locale: any) {
    //   this.locales = locale
    //   Cookies.set('locales', locale)
    // },
    setSideCollapse(status: any) {
      this.sideCollapse = status
    },
    setLoading(status: any) {
      this.loading = status
    },
    addRouter() {
      return new Promise((resolve) => {
        // getInfo({}).then(res => {
        const accessedRoutes = generateAsyncRouter(dynamicRouter, dynamic_router_list)
        const routerFilter = [...constantRoutes, ...accessedRoutes]
        const lastROuter = routerFilter
        // customGbOrderBy(routerFilter, ['index'], ['asc'])
        // console.log(lastROuter, "routerFilter");
        this.routes = lastROuter
        resolve(lastROuter)
        // }).catch(error => {
        //   reject(error)
        // })
      })
    },
    addCachedView(views: any) {
      if (this.cachedViews.includes(views.name)) {
        return false
      }
      if (!views.meta.noCache) {
        this.cachedViews.push(views.name)
      }
    }
  }
})

export default useMainStore
