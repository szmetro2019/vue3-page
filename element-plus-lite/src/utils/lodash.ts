import isEmpty from 'lodash/isEmpty'
import cloneDeep from 'lodash/cloneDeep'
import orderBy from 'lodash/orderBy'
/***
 * ! 原型链判断类型
 * 备注：输出结果转换为小写
 */
export function customPcDataType(event: any) {
  // 返回的类型有以下这些，未转换小写
  // Object、String、Number、Boolean、Null、Undefined、
  // Symbol、BigInt、RegExp、Date、Array、Function、Error、Set、Map
  // 原型链判断类型
  const dataType = Object.prototype.toString.call(event)
  // 提取字符串中的后缀类型
  const regex = /\[object (\w+)\]/ // 匹配 "[object 类型名]" 中的类型名
  const match = dataType.match(regex)
  return match ? match[1].toLowerCase() : 'unknown' // 返回类型名并且转换小写，如果没有匹配结果则返回 "unknown"
}

/***
 * ! 判断是否为空
 *  isNil
 * desic(zh-cn) 如果 value 为null 或 undefined，那么返回 true，否则返回 false
 * 只能判断null和undefined
 *
 * isEmpty
 * desic(zh-cn) 检查 value 是否为一个空对象，集合，映射或者set  如果 value 为空，那么返回 true，否则返回 false
 * null、undefined、[]、{}、0 、NaN、void  都是true
 */
export function customPcIsEmpty(event: string | number | null | undefined, result = '--') {
  const dataType = customPcDataType(event)
  if (dataType === 'number') {
    return event
  } else {
    return isEmpty(event) ? result : event
  }
}

/***
 * ! 深拷贝
 */
export function customPcCloneDeep(parms: any) {
  return cloneDeep(parms)
}

/***
 * ! 排序
 */
export function customPcOrderBy(
  data: Array<object>,
  parms: Array<string>,
  sort: Array<'asc' | 'desc'>
) {
  return orderBy(
    data,
    (item: any) => {
      return parms.map((field: any) => {
        if (customPcDataType(item[field]) === 'string') {
          return item[field].toLocaleLowerCase()
        }
        return item[field]
      })
    },
    sort
  )
}