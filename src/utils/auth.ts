// token设置
const TokenKey = 'Admin-Token'
export function getToken() {
  return localStorage.getItem(TokenKey)
}
export function setToken(token: string) {
  return localStorage.setItem(TokenKey, token)
}
export function removeToken() {
  return localStorage.removeItem(TokenKey)
}
// 多语言内容
const localeKey = 'locale-key'
export function getLocale() {
  return localStorage.getItem(localeKey)
}
export function setLocale(val: string) {
  return localStorage.setItem(localeKey, val)
}

// 首页路由参数
const homeKey = 'home-key'
export function getHomepath() {
  return localStorage.getItem(homeKey)
}
export function setHomepath(val: string) {
  return localStorage.setItem(homeKey, val)
}

// 请求接口参数
let qualityAxiosName = ''
const nodeEnv = import.meta.env.VITE_NODE_ENV
if (nodeEnv === 'development') {
  qualityAxiosName = 'period'
} else if (nodeEnv === 'production') {
  qualityAxiosName = 'period_demo'
}
export { qualityAxiosName }

