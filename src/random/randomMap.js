const randomArray = require('./randomArray');
/**
 * @description 取Map的一个属性或值
 * @since 0.1.0
 * @param {Map} map 集合 
 * @param {Boolean} isValue true返回值,false返回键
 * @returns {any} 返回一个键或者值 
 * @example
 * 
 * randomMap(new Map([['key1', 'abc'], ['key2', '567']]))
 * // => abc
 * 
 * randomMap(new Map())
 * // => undefined
 * 
 * randomMap(new Map([['key1', 'abc'], ['key2', '567']]), false)
 * // => key2
 * 
 */

function randomMap(map, isValue = true) {
    const arr = Array.from(map);
    const res = randomArray(arr);
    return isValue ? res[1] : res[0];
}

 module.exports = randomMap