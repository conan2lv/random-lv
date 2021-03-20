const randomArray = require('./randomArray');
/**
 * @description 取定型数组的随机一个值
 * @since 0.1.0
 * @param {TypedArray} typedArr 定型数组 
 * @returns {any} 返回定型数组的一个值
 * @example
 * 
 * randomTypedArray(new Int8Array(4))
 * // => 0
 * 
 * randomTypedArray(new Int16Array())
 * // => undefined
 * 
 * randomTypedArray(new Int32Array([1, 0xf, 5]))
 * // => 15
 * 
 */

function randomTypedArray(typedArr) {
    const arr = Array.from(typedArr)
    const res = randomArray(arr);
    return res
}

 module.exports = randomTypedArray