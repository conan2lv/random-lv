const round = require('../util/round');
/**
 * @description 取两数之间的一个随机整数
 * @since 0.1.0
 * @param {Number} start 指定左闭区间
 * @param {Number} end 指定右闭区间
 * @returns {Number} 当start和end为小数时,取整数部分;返回[start, end]区间一个整数
 * @example
 * 
 * randomNumber2(1, 6)
 * // => 5
 * 
 * randomNumber2(2, -2)
 * // => Uncaught Error: the argument1 should less than or equal to the argument2
 * 
 */

function randomNumber2(start, end) {
    const s = round(start);
    const e = round(end);
    if (s > e) {
        throw Error('the argument1 should less than or equal to the argument2')
    }
    const r = Math.random();
    return Math.floor(r * (e - s + 1)) + s
}

 module.exports = randomNumber2