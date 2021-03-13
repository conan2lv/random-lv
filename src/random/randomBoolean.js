/**
 * @description 随机取true或false
 * @since 0.1.0
 * @returns {Boolean} Returns true or false.
 * @example
 * 
 * randomBoolean()
 * // => true
 * 
 */

 function randomBoolean() {
    const r = Math.random();
    return r >= 0.5 ? true : false
}

 export default randomBoolean