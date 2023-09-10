/**
 * ! number-precision
 * @url  https://www.npmjs.com/package/number-precision?activeTab=readme
 * @desic Perform addition, subtraction, multiplication and 
 * division operations precisely using javascript
 * @time 2023-09-08 10:28:29
 */
import NP from 'number-precision'

/**
 * ! numberPrecision Function
 * @parms1  "plus" | "minus" | "times" | "divide"
 * @parms2  number | string  计算结果的第一个参数
 * @parms3  number | string  计算结果的第二个参数
 * @time 2023-09-08 12:10:46
 */
export const numberPrecision = (flag: "plus" | "minus" | "times" | "divide", num1: number | string, num2: number | string) => {

  const flagArr = ["plus", "minus", "times", "divide"]
  if (!flagArr.includes(flag)) {
    return new Error("第一个参数应该是plus、minus、times、divide其中一个");
  }

  const num1Str = Object.prototype.toString.call(num1) === '[object String]'
  const num1Num = Object.prototype.toString.call(num1) === '[object Number]'
  const num2Str = Object.prototype.toString.call(num2) === '[object String]'
  const num2Num = Object.prototype.toString.call(num2) === '[object Number]'

  if (!(num1Str || num1Num) || !(num2Str || num2Num)) {
    return new Error("计算的两个参数,应该是string或者number类型");
  }

  if (num1Str && isNaN(Number(num1)) || num2Str && isNaN(Number(num2))) {
    return new Error("计算的两个参数,转成number类型不应该为NaN");
  }

  num1 = num1Str ? Number(num1) : num1
  num2 = num2Str ? Number(num2) : num2
  const numObj = {
    'plus': NP.plus(num1, num2),
    'minus': NP.minus(num1, num2),
    'times': NP.times(num1, num2),
    'divide': false
  }
  if (flag === 'divide' && num2 === 0) {
    return new Error("divide也就是除数时,0不能作为除数,num2!==0");
  }
  if (flag === 'divide' && num2 !== 0) {
    return NP.divide(num1, num2)
  }
  return numObj[flag]
}


/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path: string) {
  return /^(https?:|mailto:|tel:)/.test(path)
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