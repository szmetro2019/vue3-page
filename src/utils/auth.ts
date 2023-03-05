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
// 全局颜色设置
const colorKey = 'color-key'
export function getColor() {
  return localStorage.getItem(colorKey)
}
export function setColor(val: any) {
  return localStorage.setItem(colorKey, val)
}
// 全局是否够收缩
const isCollapseKey = 'isCollapse-key'
export function getIsCollapse() {
  return localStorage.getItem(isCollapseKey)
}
export function setIsCollapse(val: any) {
  return localStorage.setItem(isCollapseKey, val)
}
// 首页路由参数
const homeKey = 'home-key'
export function getHomepath() {
  return localStorage.getItem(homeKey)
}
export function setHomepath(val: string) {
  return localStorage.setItem(homeKey, val)
}

/**
 * ! 分页参数
 * @page 默认0
 * @limit 默认20
 */
export const gbPage = 1
export const gbLimit = 10
export const pageSize = [gbLimit * 1, gbLimit * 2, gbLimit * 5]

export const dateFlag = {
  day: '天',
  year: '年',
  month: '月'
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
/**
 * ! 导出的几种形式1
export const firstName = 'Michael';
export const lastName = 'Jackson';

export function multiply() {
  return 12;
};
*/

/**
 * ! 导入的几种形式1
import { firstName, lastName } from './profile.js';
重新命名
import { firstName as surname } from './profile.js';

上面是逐一引入
下面是整体引入
import * as circle from './circle';

circle.firstName

*/

/**
 * ! 导出的几种形式2
const firstName1 = 'Michael';
const lastName1 = 'Jackson';
export { firstName1, lastName1 };

function v1() {  }
function v2() {  }
export { v1, v2 };
或者重新定义名称
export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as streamLatestVersion
};
*/

/**
 * ! 导出3
 * 
 * 
export default function () {
  //console.log('foo');
}
或者
export default function foo() {
  //console.log('foo');
}
或者
function foo() {
  //console.log('foo');
}
export default foo;


导入  随意起名字
import customName from './export-default';
customName(); // 'foo'



// 回顾上面
import { default as foo } from 'modules';
等同于
import foo from 'modules';

*/
