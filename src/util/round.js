/**
 * @description 取数字的整数部分,忽略小数部分
 * @since 0.1.0
 * @param {Number} num 数字
 * @returns {Number} 返回数字的整数部分
 * @example
 * 
 * round(2.3)
 * // => 2
 * 
 * round(5.8)
 * // => 5
 * 
 * round(-3.6)
 * // => -3
 * 
 * round(4.58666666e+2)
 * // => 458
 * 
 * round(-3.289999e+3)
 * // => -3289
 * 
 */

function round(num) {
    return num >= 0 ? Math.floor(num) : Math.ceil(num);
}

 export default round