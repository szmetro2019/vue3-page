import cloneDeep from 'lodash/cloneDeep'
import orderBy from 'lodash/orderBy'
import isNil from 'lodash/isNil'
// 深拷贝
export function customGbCloneDeep(
  parms: Array<object | number | string | null | undefined> | object
) {
  return cloneDeep(parms)
}
// _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
export function customGbOrderBy(
  data: Array<object>,
  parms: Array<string>,
  sort: Array<'asc' | 'desc'>
) {
  return orderBy(data, parms, sort)
}
// 处理空数据
export function customGbIsNil(parms: null | undefined | string, text = '--') {
  return isNil(parms) || parms === '' ? text : parms
}
// 处理空数据
export function customGbIsNilFlag(parms: null | undefined | string) {
  return isNil(parms) || parms === ''
}

export const mix = (color1: any, color2: any, weight: number) => {
  weight = Math.max(Math.min(Number(weight), 1), 0)
  const r1 = parseInt(color1.substring(1, 3), 16)
  const g1 = parseInt(color1.substring(3, 5), 16)
  const b1 = parseInt(color1.substring(5, 7), 16)
  const r2 = parseInt(color2.substring(1, 3), 16)
  const g2 = parseInt(color2.substring(3, 5), 16)
  const b2 = parseInt(color2.substring(5, 7), 16)
  let r: number | string = Math.round(r1 * (1 - weight) + r2 * weight)
  let g: number | string = Math.round(g1 * (1 - weight) + g2 * weight)
  let b: number | string = Math.round(b1 * (1 - weight) + b2 * weight)
  r = ('0' + (r || 0).toString(16)).slice(-2)
  g = ('0' + (g || 0).toString(16)).slice(-2)
  b = ('0' + (b || 0).toString(16)).slice(-2)
  return '#' + r + g + b
}

/*
! 分页处理
**/
export function pageSizefilter(arr = [], page: number = 1, limit: number = 50) {
  // arr需要过滤的数组;page 当前页;limit 每页条数
  let resList = []
  // 获取最大分页数
  const maxPage = Math.ceil(arr.length / limit)
  const newPage = page > maxPage ? maxPage : page
  // limit * 当前页数+1  大于 数组长度，则取数组长度
  const endLimit = limit * newPage > arr.length ? arr.length : limit * newPage
  // 切换数组
  resList = arr.slice(limit * (newPage - 1), endLimit)
  return resList
}
