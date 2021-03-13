import round from '../util/round';
/**
 * @description 取给定范围的一个随机整数
 * @since 0.1.0
 * @param {Number} num 指定右闭区间或左闭区间
 * @returns {Number} 当num为小数时,取整数部分;当num为非负整数时,返回[0, num]区间一个整数;当num为负数时,返回[num, 0]区间一个整数
 * @example
 * 
 * randomNumber(10)
 * // => 7
 * 
 * randomNumber(-3)
 * // => -1
 * 
 */

function randomNumber(num) {
    const n = round(num);
    const r = Math.random();
    return n >=0 ? Math.floor(r * (n + 1)) : Math.ceil(r * (n - 1));
}

 export default randomNumber