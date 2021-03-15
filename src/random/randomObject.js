const randomArray = require('./randomArray');
/**
 * @description 取给定对象的一个属性
 * @since 0.1.0
 * @param {Object} obj 字符串 
 * @param {Boolean} isValue true返回值,false返回key
 * @returns {any} 返回一个键或者值 
 * @example
 * 
 * randomObject({ key1: 'abc', key2: 567 })
 * // => abc
 * 
 * randomObject({})
 * // => undefined
 * 
 * randomObject({ key1: 'abc', key2: 567 }, false)
 * // => key2
 * 
 */

function randomObject(obj, isValue = true) {
    const arr = Object.keys(obj)
    const res = randomArray(arr);
    return isValue ? obj[res] : res;
}

 module.exports = randomObject