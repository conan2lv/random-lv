const randomArray = require('./randomArray');
/**
 * @description 取集合Set的一个值
 * @since 0.1.0
 * @param {Set} set 集合 
 * @returns {String} 随机返回集合的一个值
 * @example
 * 
 * randomSet(new Set([2, 'sss', 5]))
 * // => 2
 * 
 * randomSet(new Set())
 * // => undefined
 * 
 */

function randomSet(set) {
    const arr = Array.from(set);
    const res = randomArray(arr);
    return res;
}

 module.exports = randomSet