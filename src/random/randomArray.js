const round = require('../util/round');
const type = require('../util/type');
const randomNumber2 = require('./randomNumber2');
/**
 * @description 取给定数组里的一个值
 * @since 0.1.0
 * @param {Array} arr 数组 
 * @param {Number} start 数组开始的下标
 * @param {Number} end 数组结束的下标
 * @returns {any} 返回给定范围取的对应下标的数组值
 * @example
 * 
 * randomArray([1, 2, 5])
 * // => 5
 * 
 * randomArray([])
 * // => undefined
 * 
 * randomArray([1, 'abc'], 1)
 * // => abc
 * 
 * randomArray([5, true, 'tt'], 0, 1)
 * // => true
 * 
 * randomArray([8, 6, 12323], 2, 0)
 * // => Uncaught Error: the argument1 should less than or equal to the argument2
 * 
 */

function randomArray(arr, start, end) {
    const l = arr.length - 1;
    if (l === -1) {
        return undefined;
    }
    let s = type(start) === 'Number' ? round(start) : 0;
    let e = type(end) === 'Number' ? round(end) : l;
    if (s > e) {
        throw Error('the argument2 should less than or equal to the argument3')
    }
    if (s < 0) {
        s = 0;
    }
    if (s > l) {
        s = l;
    }
    if (e < 0) {
        e = 0;
    }
    if (e > l) {
        e = l;
    }
    const i = randomNumber2(s, e);
    return arr[i];
}

 module.exports = randomArray