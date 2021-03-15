const randomArray = require('./randomArray');
/**
 * @description 取给定字符串里的一个字符
 * @since 0.1.0
 * @param {String} str 字符串 
 * @param {Number} start 字符串开始的下标
 * @param {Number} end 字符串结束的下标
 * @returns {String} 随机返回字符串的一个字符
 * @example
 * 
 * randomString('abc')
 * // => b
 * 
 * randomString('')
 * // => ''
 * 
 * randomString('sxd', 1)
 * // => x
 * 
 * randomString('node', 0, 1)
 * // => n
 * 
 * randomString('javascript', 2, 0)
 * // => Uncaught Error: the argument1 should less than or equal to the argument2
 * 
 */

function randomString(str, start, end) {
    const arr = str.split('');
    const res = randomArray(arr, start, end);
    return res === undefined ? '' : res;
}

 module.exports = randomString