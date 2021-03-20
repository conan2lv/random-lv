const randomNumber2 = require('./randomNumber2');
/**
 * @description 取一个随机时间
 * @since 0.1.0
 * @param {Date} start 开始时间
 * @param {Date} end 结束时间 
 * @returns {Date} 返回一个从开始时间到结束时间之间的一个date对象
 * @example
 * 
 * randomDate2(new Date(), new Date())
 * // => 2007-01-17T02:42:32.801Z
 * 
 * randomDate2(new Date('2019-01-01'), new Date())
 * // => 1989-01-07T11:17:44.963Z
 * 
 */

function randomDate2(start, end) {
    const s = start.getTime();
    const e = end.getTime();
    debugger;
    const res = randomNumber2(s, e);
    return new Date(res);
}

 module.exports = randomDate2