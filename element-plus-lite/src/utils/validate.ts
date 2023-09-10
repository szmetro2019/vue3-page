/**
 */
/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path: string) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * ？https://any86.github.io/any-rule/
 * ！
 */

// 数字/货币金额（支持负数、千分位分隔符）
export function isExternal11(path: string) {
  return /^-?\d+(,\d{3})*(\.\d{1,2})?$/.test(path)
}
// 手机号(mobile phone)中国(最宽松), 只要是1开头即可, 如果你的手机号是用来接收短信, 优先建议选择这一条
export function isExternal2(path: string) {
  return /^(?:(?:\+|00)86)?1\d{10}$/.test(path)
}
// email(邮箱)
export function isExternal3(path: string) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    path
  )
}
// 身份证号(2代,18位数字),最后一位是校验位,可能为数字或字符X
export function isExternal4(path: string) {
  return /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/.test(
    path
  )
}
